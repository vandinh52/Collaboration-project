const outerGrid = document.querySelector(".outer-grid");
const navShow = document.querySelector(".navbar");
const main = document.querySelector(".main");

// Mobile menu toggle button
const bars = document.getElementById("bars");
bars.addEventListener("click", () => {
    navShow.classList.toggle("show");
    outerGrid.classList.toggle("outer-grid-expanded");
});

// Modal function open
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add("open");
}

// Modal function close
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove("open");
}
/* 
the count on the download on click button increased
*/
// Get the fa-download icon element
const downloadIcon = document.querySelector(".fa-download");
// Get the count element
const downloadCount = document.querySelector("#downloadCount");
// Set the initial count
let count = 105;
downloadIcon.addEventListener("click", function () {
    // Increase the count
    count += 1;
    // Update the count in the DOM
    downloadCount.textContent = count;
});
