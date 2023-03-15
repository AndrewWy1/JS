"use strict";

function changeById(id){
    let str = document.getElementById(id)
    if(str.style.color === "black")
    {
        str.style.color = "white";
        str.style.backgroundColor = "blue";
    } 
    else
    {
        str.style.color = "black";
        str.style.backgroundColor = "yellow";
    }
}
let flag = true;
function changeByAll(){
    if(flag){
        flag = false;
        document.all.p.style.color = "white";
        document.all.p.style.backgroundColor = "green";
    }
    else{
        flag = true;
        document.all.p.style.color = "red";
        document.all.p.style.backgroundColor = "white";
    }
}