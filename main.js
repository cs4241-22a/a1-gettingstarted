/*
TODO:
*Technical* 
1. (max 5 points) Style your page using CSS. Each style rule you apply 
    will get you 1 extra point for a maximum of 5 points. 
    Be sure to describe your style rules in your README.
2. (5 points) Add a simple JavaScript animation to the page.

      -ADD Animation for sin wave and stuff after HEAD

3. (max 5 points) Experiment with other HTML tags 
    (links, images, tables etc.) Each extra tag you use will get 
    you 1 extra point for a maximum of 5 points. 


*Design*
1. (10 points) Create a color palette using 
    [color.adobe.com](https://color.adobe.com). 
    Use all the colors in the palette in your webpage by 
    implementing the appropriate CSS. Add a small screenshot 
    of the color wheel for your color palette to your repo.

    -Mint Works well, mint, white and blackbg

2. (5 points) Use a font from [Goolge Fonts](https://fonts.google.com) 
    in your website. 
    - (DONE), loaded font and applied to head
    */

var canvas, ctx, intervalID, currentX, currentY, radius, startTime;
var animationChangeTime = 5000; // time in ms
const lineWidth = 3; // 3 seems to be the min for some reason
const colors = ["#47E6AA","#E65E94","#E67F6A","#C553E6","#BCE675"]
var cicleCenters = [];
var colorIndex = -1;


function animate(){
    startTime = Date.now();
    canvas = document.getElementById("myCanvas");
    // getting real canvas height and width
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;
    ctx = canvas.getContext('2d');
    ctx.lineWidth = lineWidth;
    currentX = 0; currentY = canvas.height/2;
    radius = 5;
    setInterval(drawSin,100);
    //initBubbleDraw();
    //setInterval(drawExpandingBubbles,40);
}


function getYSin(x){
    return canvas.height/2 + (canvas.height/2 - 4) * Math.sin(x/10);
}

function drawSin(){
    //update color every call
    colorIndex++;
    if (colorIndex > colors.length) colorIndex = 0; // wrap around colors
    ctx.beginPath();
    // begin Path changes colors and starts new line segment
    ctx.strokeStyle = colors[colorIndex]; // static color for now, next time in a list
    ctx.lineCap = 'round'; // this makes the curves smoother, or so they say
    ctx.lineJoin = 'round'
    ctx.moveTo(currentX,currentY);
    var endAngle = canvas.width - currentX;
    if (endAngle <= 0){
        if (Date.now() - startTime > animationChangeTime){
            // resetting canvas for next animation
            alert("Should end");
            ctx.clearRect(0,0,canvas.width,canvas.height);
            return;
        }
        // else repeat animation loop back
        currentX = 0; currentY = canvas.height/2;
        return;
    } else if (endAngle > 360) {
        endAngle = currentX + 360;
    } else if (endAngle <= 360){
        endAngle = canvas.width;
    }
    for (let angle = currentX; angle <= endAngle; angle++){
        let y = getYSin(angle);
        ctx.lineTo(angle,y);
    }
    ctx.stroke();
    // update global x,y pos
    currentX = endAngle;
    currentY = getYSin(currentX);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function drawExpandingBubbles(){
    console.log(radius);
    for (let i =0; i < cicleCenters.length; i++){
        ctx.beginPath();
        ctx.arc(cicleCenters[i][0],cicleCenters[i][1], radius, 0, 2*Math.PI,0)
        ctx.fillStyle = colors[cicleCenters[i][2]];
        ctx.fill();
    }
    radius+=3;
}

function initBubbleDraw(){
    var colorIndex = -1;
    const numBubbles = randomInt(4,9);
    for (let i =0; i < numBubbles; i++,colorIndex++){   
        if (colorIndex > colors.length) colorIndex = 0; // wrap around colors      
        let point = [randomInt(0,canvas.width), randomInt(0,canvas.height),colorIndex] // [x,y,colorIndex]
        cicleCenters.push(point);
    }
}

document.addEventListener('load',animate());
