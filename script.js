function goToSection(section_id) {
    document.getElementById(section_id).scrollIntoView({
    behavior: 'smooth'
  });
}


document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".zoomable-image");

  images.forEach(function (image) {
    image.addEventListener("click", function () {
      this.classList.toggle("zoomed");
    });
  });
});