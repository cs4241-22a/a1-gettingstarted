let mouse = { //holds the current mouse position
    x: -1,
    y: -1
};

let pan = { //the amount the user has panned the text
    x: 0,
    y: 0
};

let div = document.getElementById('container');

addEventListener("contextmenu", function(event) {
    //prevent right click menu
    event.preventDefault();
    //find last mouse position
    if(mouse.x !== -1 && mouse.y !== -1) {
        pan.x = pan.x + (event.pageX - mouse.x);
        pan.y = pan.y + (event.pageY - mouse.y);
    } else {
        pan.x = pan.x + event.pageX;
        pan.y = pan.y + event.pageY;
    }
    //update mouse position
    mouse.x = event.pageX;
    mouse.y = event.pageY;
    //move text to new position
    div.style.left = pan.x;
    div.style.top = pan.y;
});