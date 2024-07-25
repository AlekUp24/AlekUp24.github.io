function goToSection(section_id) {
    document.getElementById(section_id).scrollIntoView({
    behavior: 'smooth'
  });
}

//
//document.addEventListener("DOMContentLoaded", function () {
//  const images = document.querySelectorAll(".zoomable-image");

//  images.forEach(function (image) {
//    image.addEventListener("click", function () {
//      this.classList.toggle("zoomed");
//    });
//  });
//});


document.addEventListener('DOMContentLoaded', () => {
const gallery = document.getElementByClassName('project"');
const images = gallery.getElementsByTagName('img');

// Create modal overlay
const modalOverlay = document.createElement('div');
modalOverlay.classList.add('modal-overlay');

// Create zoomed image container
const zoomedImage = document.createElement('img');
zoomedImage.classList.add('zoomed-image');
modalOverlay.appendChild(zoomedImage);

// Append modal overlay to body
document.body.appendChild(modalOverlay);

// Add click event to each image in the gallery
for (let img of images) {
  img.addEventListener('click', function () {
    // Set the source of the zoomed image to the clicked image's source
    zoomedImage.src = this.src;
    // Show the modal overlay
    modalOverlay.style.display = 'flex';
  });
}

// Add click event to the modal overlay to close it
modalOverlay.addEventListener('click', function () {
  this.style.display = 'none';
});
});
