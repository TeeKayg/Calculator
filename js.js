const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const DEL = document.querySelector(".DEL");
const AC = document.querySelector(".AC");
const inputDisplay = document.querySelector(".screenInput");
const totalDisplay = document.querySelector(".screenTotal");

let screenTotal = '';
let screenInput = '';

numbers.forEach((btn) =>{
    btn.addEventListener("click" , (e) => {
        showNumber(e.target.textContent);
    });
});

function showNumber(num){
    screenInput += num;
    inputDisplay.textContent = screenInput;
};

