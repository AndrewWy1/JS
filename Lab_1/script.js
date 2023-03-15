"use stric";

var heading = document.querySelector('h1');
setInterval(function () {
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) +
    ',' + (Math.floor(Math.random() * 256)) +
    ',' + (Math.floor(Math.random() * 256)) + ')';
    heading.style.color = "red";
}, 1000);
