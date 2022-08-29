/**
 * global variables
 * @type {number}
 */
var colorFlag = 0;

/**
 * main function handling events
 */
function main(){
    document.addEventListener('keydown',onDocumentKeyDown,false); // key pressing
    window.onload = function () {
        const color = ["white", "red", "green", "blue", "black"];
        document.body.style.backgroundColor = color[colorFlag % 4]

    }
}

/**
 * handling key press
 * @param event
 */
function onDocumentKeyDown(event){
    switch(event.code){
        case "Key1":
            colorFlag = 1;
            break;
        case "Key2":
            colorFlag = 2;
            break;
        case "Key3":
            colorFlag = 3;
            break;
        case "Key4":
            colorFlag = 3;
            break;
    }
} // end of handling key press
