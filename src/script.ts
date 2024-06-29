document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("project-modal");
    const span = document.getElementsByClassName("close")[0];

    if (!modal || !span) {
        console.error("Modal or close button not found.");
        return;
    }

    const modalElem = modal as HTMLElement;
    const spanElem = span as HTMLElement;

    spanElem.onclick = function() {
        modalElem.style.display = "none";
    };

    window.onclick = function(event: MouseEvent) {
        if (event.target === modalElem) {
            modalElem.style.display = "none";
        }
    };

    const projectItems = document.querySelectorAll('.project-item') as NodeListOf<HTMLElement>;

    projectItems.forEach(function(item) {
        item.addEventListener('click', function(this: HTMLElement) {
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');
            const images = this.getAttribute('data-images')?.split(',');

            const modalTitle = document.getElementById('modal-title');
            if (modalTitle) modalTitle.innerText = title ?? '';

            const modalDescription = document.getElementById('modal-description');
            if (modalDescription) modalDescription.innerText = description ?? '';

            const imagesContainer = document.getElementById('modal-images');
            if (imagesContainer) {
                imagesContainer.innerHTML = '';
                images?.forEach(function(src) {
                    const img = document.createElement('img');
                    img.src = src!;
                    imagesContainer.appendChild(img);
                });
            }

            modalElem.style.display = "block";
        });
    });
});
