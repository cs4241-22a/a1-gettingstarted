/**
 * global variables
 * @type {number}
 */
var colorFlag = 0;
const color = ["white","#0CF2C2", "#120DFC", "#E6006F", "#FF8B08", "#EAF500"];

/**
 * main function handling events
 */
function main() {
    document.addEventListener('keydown', onDocumentKeyDown, false); // key pressing
}

/**
 * handling key press
 * @param event
 */
function onDocumentKeyDown(event){
    switch(event.code){
        case "KeyA":
            colorFlag = 1;
            console.log(colorFlag)
            break;
        case "KeyS":
            colorFlag = 2;
            console.log(colorFlag)
            break;
        case "KeyD":
            colorFlag = 3;
            console.log(colorFlag)
            break;
        case "KeyF":
            colorFlag = 4;
            console.log(colorFlag)
            break;
        case "KeyG":
            colorFlag = 5;
            console.log(colorFlag)
            break;
        case "KeyR":
            colorFlag = 0;
            console.log(colorFlag)
            break;
    }
    document.body.style.backgroundColor = color[colorFlag % 6];
    console.log(color[colorFlag % 6])
} // end of handling key press
