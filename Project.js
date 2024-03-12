const outerGrid = document.querySelector(".outer-grid");
const navShow = document.querySelector(".navbar");
const main = document.querySelector(".main");

/* 
1 Mobile menu toggle button
*/
const bars = document.getElementById("bars");
bars.addEventListener('click', () => {
    navShow.classList.toggle("show");
    outerGrid.classList.toggle("outer-grid-expanded");
})

// Modal function
function modal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add("open");
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove("open");
}