//window.alert("Seth is angwy");

// buttons
const zeroBtn = document.getElementById("zeroBtn");
const oneBtn = document.getElementById("oneBtn");
const twoBtn = document.getElementById("twoBtn");
const threeBtn = document.getElementById("threeBtn");
const fourBtn = document.getElementById("fourBtn");
const fiveBtn = document.getElementById("fiveBtn");
const sixBtn = document.getElementById("sixBtn");
const sevenBtn = document.getElementById("sevenBtn");
const eightBtn = document.getElementById("eightBtn");
const nineBtn = document.getElementById("nineBtn");

const pointBtn = document.getElementById("pointBtn");

const dividBtn = document.getElementById("dividBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const solveBtn = document.getElementById("solveBtn");

const resultLabel = document.getElementById("result");

let x = "";
let y = "";
let firstNum = "0";
let secondNum = "0";
let result = "0";
let wantedOperation = 0;
let solved = false;
let isFirstNum = true;

function addToEnd(value) {
    if (solved) {
        resetScreen();
    }
    if(isFirstNum)
    {
        if (firstNum == "0") {
            firstNum = "";
        }
        firstNum += value;
        resultLabel.textContent = firstNum;
    }
    else {
        if (secondNum == "0") {
            secondNum = "";
        }
        secondNum += value;
        resultLabel.textContent = secondNum;
    }
}

function resetScreen() {
    wantedOperation = 0;
    firstNum = "0";
    secondNum = "0";
    result = "0"
    resultLabel.textContent = firstNum;
    solved = false;
    isFirstNum = true;
}

dividBtn.onclick = function() {
    wantedOperation = 1;
    isFirstNum = false;
}

multiplyBtn.onclick = function() {
    wantedOperation = 2;
    isFirstNum = false;
}

minusBtn.onclick = function() {
    wantedOperation = 3;
    isFirstNum = false;
}

plusBtn.onclick = function() {
    wantedOperation = 4;
    isFirstNum = false;
}

solveBtn.onclick = function() {
    switch (wantedOperation) {
        case 0:
            break;
        case 1:
            result = Number(firstNum) / Number(secondNum);
            break;
        case 2:
            result = Number(firstNum) * Number(secondNum);
            break;
        case 3:
            result = Number(firstNum) - Number(secondNum);
            break;
        case 4:
            result = Number(firstNum) + Number(secondNum);
            break;
        default:
            break;
    }
    resultLabel.textContent = result;
    firstNum = "0";
    secondNum = "0";
    wantedOperation = 0;
    solved = true;
    isFirstNum = true;
}