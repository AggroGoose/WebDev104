let allImages = document.querySelectorAll(".all-images");
const displayedImage = document.querySelector(".displayed-image");

allImages.forEach((item) => {
  item.addEventListener("click", (e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
});
