/**
 * Help from https://stackoverflow.com/questions/51167628/how-to-rotate-image-in-javascript
 */
let rotationTimer;
let angle = 0;
function spin() {
    rotationTimer = setInterval(turn, 100);
}
function turn() {
    angle += 5;
    document.getElementById("ProfPic").style.transform = "rotate("+ (angle % 360) +"deg)";
}

let colorTimer;
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
let colorIndex = 0;
function autoColorChange() {
    colorIndex = 0;
    document.getElementById("party").disabled = true;
    colorTimer = setInterval(changeColor, 500);
}
function changeColor() {
    document.getElementById("body").style.color = colors[colorIndex % 6];
    colorIndex += 1;
}
function stopParty() {
    clearInterval(colorTimer);
    document.getElementById("party").disabled = false;
}