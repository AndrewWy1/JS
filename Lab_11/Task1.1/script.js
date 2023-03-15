"use strict";

let moveObject = document.getElementById("div");
moveObject.style.top = parseInt(window.innerHeight) / 2 + "px";
moveObject.style.left = parseInt(window.innerWidth) / 2 + "px";


let interval;
let angle = 0;
let R = 150;
let centerX = parseInt(window.innerWidth) / 2;
let centerY = parseInt(window.innerHeight) / 2;

function Start() {
  interval = setInterval(function () {
    let x = Math.cos(angle) * R;
    let y = Math.sin(angle) * R;

    moveObject.style.left = centerX + x + "px";
    moveObject.style.top = centerY + y + "px";

    angle += 0.010;
  }, 0)
}

function Stop() {
  clearInterval(interval);
}

