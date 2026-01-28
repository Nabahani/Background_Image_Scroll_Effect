const image = document.querySelector(".bg-image");

function updateImage() {
    image.style.opacity = 1 - window.pageYOffset / 900;
    image.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}

window.addEventListener("scroll", () => {
    updateImage();
})