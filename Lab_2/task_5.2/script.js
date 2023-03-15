const traff = document.getElementById("traff_light");

traff.onclick = changeColorFunction;

function changeColorFunction(){
    const atr = traff.getAttribute("src");

    if(atr == "images/green.png"){
        traff.setAttribute("src", "images/yellow.png");
    } else if(atr == "images/yellow.png"){
        traff.setAttribute("src", "images/red.png");
    } else if(atr == "images/red.png"){
        traff.setAttribute("src", "images/green.png");
    }
}