const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const DEL = document.querySelector(".DEL");
const AC = document.querySelector(".AC");
const inputDisplay = document.querySelector(".screenInput");
const totalDisplay = document.querySelector(".screenTotal");

let screenTotal = '';
let screenInput = '';
let operator = '';



numbers.forEach((btn) =>{
    btn.addEventListener("click" , (e) => {
        showNumber(e.target.textContent);
    });
});

function showNumber(num){
    screenInput += num;
    inputDisplay.textContent = screenInput;
};

operators.forEach((btn) =>{
    btn.addEventListener("click",(e) =>{
        addOperator(e.target.textContent);
        calculate;
    });
});

function addOperator(op){
    operator = op;
    screenTotal = screenInput;
    screenInput = '';
    inputDisplay.textContent = '';
    totalDisplay.textContent = screenTotal + ' ' + operator;

}

AC.addEventListener('click', () => {
    screenInput = '';
    inputDisplay.textContent = '';
    screenTotal = '';
    totalDisplay.textContent = '';
});

DEL.addEventListener('click', (screenInput) => {
    let screenInputDelete = screenInput.replace(screenInput.length-1, '');
    inputDisplay.textContent = screenInputDelete;
    return screenInputDelete;

})

equals.addEventListener("click", calculate);

function calculate() {
    screenTotal = Number(screenTotal);
    screenInput = Number(screenInput);

    if (operator === '*'){
        screenTotal = screenInput * screenTotal;
    };
    if (operator === '÷'){
        screenTotal = screenTotal / screenInput;
    };
    if (operator === '+'){
        screenTotal = screenTotal + screenInput
    };
    if (operator === '-'){
        screenTotal = screenTotal - screenInput;
    };
    totalDisplay.textContent = screenTotal;
    inputDisplay.textContent = '';
    screenInput = '';
    
}



