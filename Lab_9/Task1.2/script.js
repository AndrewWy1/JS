"use strict";

const mainForm = document.mainForm;

const inputAngle = mainForm.valueAngle;
const inputFunc = mainForm.func;
const button = mainForm.SUBMIT;

function checkAngle() {
  if (+inputAngle.value < 0 || +inputAngle.value > 90) {
    alert("Кут повиннен бути більше 0 і менше 90!");
    inputAngle.focus();
  }
}

mainForm.addEventListener("submit", function (event) {
  if (+inputAngle.value < 0 || +inputAngle.value > 90 || inputAngle == "") {
    alert("Кут повиннен бути більше 0 і менше 90!");
    inputNumber.focus();
    event.preventDefault();
  } else {
    button.parentElement.insertAdjacentHTML(
      "beforeend",
      `<p> ${inputFunc.value}(${inputAngle.value}°)= ${calculate(inputAngle.value, inputFunc.value)}</p>`

    );
  }
});


function calculate(value, func) {
  if (func === "sin") {
    return Math.sin(value * Math.PI / 180).toFixed(1);
  }
  if (func === "cos") {
    return Math.cos(value * Math.PI / 180).toFixed(1);
  }
  if (func === "tan") {
    return Math.tan(value * Math.PI / 180).toFixed(1);
  }
}