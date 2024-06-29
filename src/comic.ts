import moment from 'moment';

document.addEventListener("DOMContentLoaded", function () {
    const email = "e.akimenko@innopolis.university";
    const idURL = `https://fwd.innopolis.university/api/hw2?email=${email}`;

    const comicTitle = document.getElementById("comic-title");
    const comicDate = document.getElementById("comic-date");
    const comicImg = document.getElementById("comic-img");
    const comicAlt = document.getElementById("comic-alt");
    const comicDetails = document.getElementById("comic-details");
    const getComicBtn = document.getElementById("get-comic-btn");
    const closeBtn = document.querySelector(".comic-details .close");

    if (
        !comicTitle ||
        !comicDate ||
        !comicImg ||
        !comicAlt ||
        !comicDetails ||
        !getComicBtn ||
        !closeBtn
    ) {
        console.error("One or more required elements not found.");
        return;
    }

    // Type assertions after null check
    const comicTitleElem = comicTitle as HTMLElement;
    const comicDateElem = comicDate as HTMLElement;
    const comicImgElem = comicImg as HTMLImageElement;
    const comicAltElem = comicAlt as HTMLElement;
    const comicDetailsElem = comicDetails as HTMLElement;
    const getComicBtnElem = getComicBtn as HTMLElement;
    const closeBtnElem = closeBtn as HTMLElement;

    getComicBtnElem.addEventListener('click', function() {
        getComicBtnElem.style.display = 'none';

        comicTitleElem.textContent = "Loading title...";
        comicDateElem.textContent = "Loading date...";
        comicAltElem.textContent = "Loading description...";
        comicImgElem.src = "";
        comicDetailsElem.style.display = 'block';

        fetch(idURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const comicId = data;
                const comicURL = `https://fwd.innopolis.university/api/comic?id=${comicId}`;

                return fetch(comicURL);
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(comic => {
                comicTitleElem.textContent = comic.safe_title;
                comicImgElem.src = comic.img;
                comicImgElem.alt = comic.alt;
                comicAltElem.textContent = comic.alt;
                comicAltElem.classList.add('active');

                const date = new Date(comic.year, comic.month - 1, comic.day);
                if (isNaN(date.getTime())) {
                    comicDateElem.textContent = "Invalid Date";
                } else {
                    comicDateElem.textContent = moment(date).fromNow();
                }
            })
            .catch(error => {
                console.error("Error fetching the comic:", error);
                comicTitleElem.textContent = "Error fetching comic details";
                comicDateElem.textContent = "";
                comicImgElem.src = "";
                comicAltElem.textContent = "";
                comicDetailsElem.style.display = 'none';
                getComicBtnElem.style.display = 'block';
            });
    });

    closeBtnElem.addEventListener('click', function() {
        comicDetailsElem.style.display = 'none';
        getComicBtnElem.style.display = 'block';
    });
});
