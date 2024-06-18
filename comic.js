document.addEventListener("DOMContentLoaded", function () {
    const email = "e.akimenko@innopolis.university";
    const idURL = `https://fwd.innopolis.university/api/hw2?email=${email}`;
    const comicTitle = document.getElementById("comic-title");
    const comicDate = document.getElementById("comic-date");
    const comicImg = document.getElementById("comic-img");
    const comicAlt = document.getElementById("comic-alt");
    const comicDetails = document.getElementById("comic-details");
    const getComicBtn = document.getElementById("get-comic-btn");

    getComicBtn.addEventListener('click', function() {
        getComicBtn.style.display = 'none';

        comicTitle.textContent = "Loading title...";
        comicDate.textContent = "Loading date...";
        comicAlt.textContent = "Loading description...";
        comicImg.src = "";
        comicDetails.style.display = 'block';

        fetch(idURL)
            .then(response => response.json())
            .then(data => {
                const comicId = data;
                const comicURL = `https://fwd.innopolis.university/api/comic?id=${comicId}`;

                return fetch(comicURL);
            })
            .then(response => response.json())
            .then(comic => {

                comicTitle.textContent = comic.safe_title;
                comicImg.src = comic.img;
                comicImg.alt = comic.alt;
                comicAlt.textContent = comic.alt;
                comicAlt.classList.add('active');

                
                const date = new Date(comic.year, comic.month - 1, comic.day);
                if (isNaN(date)) {
                    comicDate.textContent = "Invalid Date";
                } else {
                    comicDate.textContent = date.toLocaleDateString();
                }
            })
            .catch(error => {
                console.error("Error fetching the comic:", error);
                comicTitle.textContent = "Error fetching comic details";
                comicDate.textContent = "";
                comicImg.src = "";
                comicAlt.textContent = "";
                comicDetails.style.display = 'none';
                getComicBtn.style.display = 'block';
            });
    });
});
