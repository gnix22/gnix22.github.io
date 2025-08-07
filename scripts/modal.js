const imgs = document.querySelectorAll(".img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const modalTxt = document.querySelector(".modal-text");
const close = document.querySelector(".close");

imgs.forEach(img => {
    img.addEventListener("click", () => {
        modalImg.src = img.src;
        modalTxt.innerHTML = img.alt;
        modal.classList.add("appear");
        close.addEventListener("click", () => {
            modal.classList.remove("appear");
        });
    });
});