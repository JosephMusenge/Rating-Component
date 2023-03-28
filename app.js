// Variables 
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");

// Listen for click event on modal button
modalBtn.addEventListener("click", function(){
    modal.classList.add("open-modal");
})