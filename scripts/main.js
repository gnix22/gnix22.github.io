const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const snippetHead = document.querySelector(".snippet-heading")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    snippetHead.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    snippetHead.remove("active");
}))

function revealText(section) {
  console.log("Clicked heading:", section);
  section.classList.toggle('revealed');
}