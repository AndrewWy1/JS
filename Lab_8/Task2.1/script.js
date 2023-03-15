"use strict";

function ClickSecond(){
  let line = document.getElementById("second");
  if(line.style.color == "black") {
    line.style.fontSize = "48px";
    line.style.color = "white";
    line.style.backgroundColor = "blue";
  } else {
    line.style.fontSize = "16px";
    line.style.color = "black";
    line.style.backgroundColor = "white";
  }
}

function ThirdDown(){
  document.getElementById("third").style.backgroundColor = "green";
}
function ThirdUp(){
  document.getElementById("third").style.backgroundColor = "yellow";
}

function FourthOver(){
  document.getElementById("fourth").style.backgroundColor = "red";
}
function FourthOut(){
  document.getElementById("fourth").style.backgroundColor = "aqua";
}