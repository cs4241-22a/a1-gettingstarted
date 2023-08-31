
var id = null;

const colors = [
    "#435F94",
    "#D4E0FC",
    "#7B9FE0",
    "#947534",
    "#E0A526"];


function animator() {
    let elem = document.getElementById("animation");
    let box = document.getElementById("boundingBox");
    let upOrDown = true;
    let leftOrRight = true;
    let upDownPos = 0;
    let leftRightPos = 0;
    let temp
    console.log("Bouncing time\n");

    clearInterval(id);
    id = setInterval(frame, 20);

    let boxHeight = parseInt(box.clientHeight);
    let boxWidth = parseInt(box.clientWidth);
    let elemHeight = parseInt(elem.clientHeight);
    let elemWidth = parseInt(elem.clientWidth);
    let rand = (Math.random() + 1) / 2;
    function frame() {

        if (upOrDown) {
            upDownPos++;
            elem.style.top = upDownPos + 'px';
        } else {
            upDownPos--;
            elem.style.top = upDownPos + 'px';
        }

        if (leftOrRight) {
            leftRightPos++;
            elem.style.left = leftRightPos / rand + 'px';
        } else {
            leftRightPos--;
            elem.style.left = leftRightPos / rand + 'px';

        }

        let elemTop = parseInt(elem.style.top);
        let elemLeft = parseInt(elem.style.left);

        if (elemTop <= 0 || elemTop >= (boxHeight - elemHeight)) {
            upOrDown = !upOrDown;
            temp = (Math.random() * 1000) % 5;
            temp = Math.round(temp);
            elem.style.backgroundColor = colors[temp];
        }

        if (elemLeft <= 0 || elemLeft >= (boxWidth - elemWidth)) {
            leftOrRight = !leftOrRight;
            temp = (Math.random() * 1000) % 5;
            temp = Math.round(temp);
            elem.style.backgroundColor = colors[temp];
        }
    }
}
