"use strict";

const mainForm = document.forms.mainForm;
const inputNumber = mainForm.numbers;

function checknum() {
    if (+inputNumber.value <= 0) {
        alert("Введіть конкретну кількість товарів!");
        inputNumber.focus();
    }
}

mainForm.addEventListener("submit", function (event) {
    if (+inputNumber.value <= 0 || inputNumber == "") {
        alert("Введіть конкретну кількість товарів!");
        inputNumber.focus();
        event.preventDefault();
    }
});