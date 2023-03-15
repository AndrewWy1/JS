"use strict";

let obj = document.getElementById("redBox");
let container = document.getElementById("greyBox");

let containerPositionX = container.getBoundingClientRect().left;
let containerPositionY = container.getBoundingClientRect().top;

let containerWidth = container.getBoundingClientRect().width;
let containerHeight = container.getBoundingClientRect().height;

let objWidth = obj.getBoundingClientRect().width;
let objHeight = obj.getBoundingClientRect().height;

let flag = false;
obj.addEventListener("mousedown", (eventMouse) => { flag = true; });
obj.addEventListener("mouseup", (eventMouse) => { flag = false; });

obj.addEventListener("mousemove", (eventMove) => {
    if ((eventMove.pageX - (objWidth / 2) >= containerPositionX && eventMove.pageX + (objWidth / 2) <= containerPositionX + containerWidth) &&
        (eventMove.pageY - (objHeight / 2) >= containerPositionY && eventMove.pageY + (objHeight / 2) <= containerPositionY + containerHeight) && flag) 
    {
        obj.style.left = eventMove.pageX - (objWidth / 2) + "px"; // ...змінюється позиція по х
        obj.style.top = eventMove.pageY - (objHeight / 2) + "px"; // змінюється позиція по у
    }
})