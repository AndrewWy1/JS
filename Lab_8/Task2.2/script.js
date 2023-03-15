"use strict";

const clickArea = document.querySelector("#BodyClick");

function rodEl (event)
{
    let id = event.target.id;
    let element = document.getElementById(id);

    switch(id){
        case "picture":
            if(element.getAttribute("src") == "images/cat.jfif"){
                element.setAttribute("src", "images/dog.jfif");
                document.getElementById("caption").innerHTML = "Another very cool caption!";
            }
                
            else{
                element.setAttribute("src", "images/cat.jfif");
                document.getElementById("caption").innerHTML = "Very cool caption!";
            }
            
            break;
        case "caption":
            if(element.style.backgroundColor == "white")
            {
                element.style.backgroundColor = "black";
                element.style.color = "white";
            } else 
            {
                element.style.backgroundColor = "white";
                element.style.color = "black";
            }
            break;
    }
}
clickArea.addEventListener("click", rodEl);

