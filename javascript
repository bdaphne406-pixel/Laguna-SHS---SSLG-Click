const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navlinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});