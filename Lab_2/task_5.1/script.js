"use strick";

const buttonOn = document.getElementById("on");
const buttonOff = document.getElementById("off");
const img = document.getElementById("bulb");

buttonOff.onclick = functionOff;
buttonOn.onclick = functionOn;

function functionOn(){
   img.setAttribute("src", "images/bulb_on.png");
}

 function functionOff(){
    img.setAttribute("src", "images/bulb_off.png");
 }