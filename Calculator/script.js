
let addElem = document.getElementById("add");
let subElem = document.getElementById("sub");
let mulElem = document.getElementById("mul");
let divElem = document.getElementById("div");

let inputOneElem = document.getElementById("input1");
let inputSecondElem = document.getElementById("input2");

let calculate = document.getElementById("Calculate");
let output = document.getElementById("Output");

let numpad = document.getElementById("numpad");

output.textContent = 0;

let selectedoperator = "";
let selectedElem = null;

let activeInput = inputOneElem;


inputOneElem.addEventListener("click", function () {
    activeInput = inputOneElem;
});

inputSecondElem.addEventListener("click", function () {
    activeInput = inputSecondElem;
});


function selectOperator(elem) {

    if (selectedElem !== null) {
        selectedElem.style.backgroundColor = "";
        selectedElem.style.color = "";
    }

    selectedElem = elem;
    selectedoperator = elem.textContent;

    elem.style.backgroundColor = "blue";
    elem.style.color = "white";
}


addElem.addEventListener("click", function () {
    selectOperator(addElem);
});

subElem.addEventListener("click", function () {
    selectOperator(subElem);
});

mulElem.addEventListener("click", function () {
    selectOperator(mulElem);
});

divElem.addEventListener("click", function () {
    selectOperator(divElem);
});

numpad.addEventListener("click", function (e) {

    if (e.target.tagName !== "BUTTON") return;

    let value = e.target.dataset.value;

    if (value === "backspace") {

        activeInput.value = activeInput.value.slice(0, -1);

    }

    else if (value === "clear") {

        activeInput.value = "";

    }

    else if (value === ".") {

        if (!activeInput.value.includes(".")) {
            activeInput.value += ".";
        }

    }

    else {

        activeInput.value += value;

    }
});

calculate.addEventListener("click", function () {

    let valOne = Number(inputOneElem.value);
    let valTwo = Number(inputSecondElem.value);

    if (inputOneElem.value === "" || inputSecondElem.value === "") {
        output.textContent = "Enter both numbers";
        return;
    }

    switch (selectedoperator) {

        case "+":
            output.textContent = valOne + valTwo;
            break;

        case "-":
            output.textContent = valOne - valTwo;
            break;

        case "*":
            output.textContent = valOne * valTwo;
            break;

        case "/":

            if (valTwo === 0) {
                output.textContent = "Cannot divide by zero";
            } else {
                output.textContent = valOne / valTwo;
            }

            break;

        default:
            output.textContent = "Select an operator";
            break;
    }
});
