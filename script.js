var modal = document.getElementById("project-modal");

var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get all project items
var projectItems = document.querySelectorAll('.project-item');

// Add click event to each project item
projectItems.forEach(function(item) {
    item.onclick = function() {
        // Get data attributes
        var title = this.getAttribute('data-title');
        var description = this.getAttribute('data-description');
        var images = this.getAttribute('data-images').split(',');

        // Set modal content
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-description').innerText = description;

        // Clear previous images
        var imagesContainer = document.getElementById('modal-images');
        imagesContainer.innerHTML = '';

        // Add new images
        images.forEach(function(src) {
            var img = document.createElement('img');
            img.src = src;
            imagesContainer.appendChild(img);
        });

        // Display the modal
        modal.style.display = "block";
    }
});
