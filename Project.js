const outerGrid = document.querySelector(".outer-grid");
const navShow = document.querySelector(".navbar");
const main = document.querySelector(".main");

const bars = document.getElementById("bars");
bars.addEventListener('click', () => {
    navShow.classList.toggle("show");
    outerGrid.classList.toggle("outer-grid-expanded");
})