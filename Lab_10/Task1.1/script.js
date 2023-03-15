"use strict";

const photoForm = document.forms.photoForm;
const photoSelect = photoForm.Photos;

const array = new Map;
const srcArray = ["./images/forest.jpg", "./images/lake.jpg", "./images/riverThreshold.jpg", "./images/bridge.jfif",
    "./images/roads.jpg", "./images/pine.jfif", "./images/valleys.jpg", "./images/mushrooms.jpg", "./images/flowers.jpeg", "./images/rubus.jpg"
];

for(let i = 0; i < photoSelect.options.length; i++){
    array.set(photoSelect.options[i].text, srcArray[i]);
}

function changeImage(){
    if(document.getElementById("img"))
        document.getElementById("img").remove();
    photoSelect.parentElement.insertAdjacentHTML(
        "beforeend",
        `<div id = "img"><img src="${array.get(photoSelect.options[photoSelect.selectedIndex].text)}" alt="" height = "400" width = "800"></div>`
      );
}