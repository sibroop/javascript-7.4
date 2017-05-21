// JavaScript Document
function show(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "X : " + x + ", Y: " + y +" "+ new Date();
    document.getElementById("print").innerHTML = coor;
}

function clear() {
    document.getElementById("print").innerHTML = "";
}