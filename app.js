// Variables 
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const selected = document.querySelector(".selected");

// Listen for click event on modal button
modalBtn.addEventListener("click", function (){
    modal.classList.add("open-modal");
});

// get number from clicked number
const numbers = document.querySelectorAll(".number");
numbers.forEach(function (btn){
    btn.addEventListener("click", function(e){
        const value = e.currentTarget.textContent;
        selected.textContent = `You selected ${value} out of 5`;
    });
});


