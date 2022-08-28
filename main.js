var canvas, ctx, fadeIntervalTime, sinIntervalID, currentX, currentY, radius, startTime,deltaRadius, fadebubbleIntervalID, bubbleIntervalID, sinIntervalTime, bubbleIntervalTime;


var animationChangeTime = 4000; // time in ms
const lineWidth = 3; 
const colors = ["#47E6AA","#E65E94","#E67F6A","#C553E6","#BCE675"];
var cicleCenters = [];
var colorIndex = -1;
deltaRadius = 3
sinIntervalTime = 90; //in ms
bubbleIntervalTime = 30;
fadeIntervalTime = 10;

const toggleSwitch = document.getElementById("themeToggle");

toggleSwitch.addEventListener('change', ()=>{
    // elements that need to be toggled
    document.body.classList.toggle('light-theme');
    document.getElementById('techExpTable').classList.toggle('light-theme');
  })

function animate(){
    startTime = Date.now();
    canvas = document.getElementById("myCanvas");
    // getting real canvas height and width
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;
    ctx = canvas.getContext('2d');
    ctx.lineWidth = lineWidth;
    currentX = 0; currentY = canvas.height/2;
    sinIntervalID =  setInterval(drawSin,sinIntervalTime);  
}

function getYSin(x){
    return canvas.height/2 + (canvas.height/2 - 4) * Math.sin(x/10);
}

// first animation
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
        if (Date.now() - startTime > animationChangeTime + animationChangeTime/2){
            // resetting canvas for next animation
            clearInterval(sinIntervalID);
            ctx.clearRect(0,0,canvas.width,canvas.height);
            
            initBubbleDraw();
            startTime =  Date.now();
            bubbleIntervalID = setInterval(drawExpandingBubbles,bubbleIntervalTime);
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

// second animation
function drawExpandingBubbles(){
    if (radius > Math.max(canvas.width,canvas.height)/2){
        if (Date.now() - startTime > animationChangeTime){
            // resetting canvas for next animation
            clearInterval(bubbleIntervalID);
            radius = 2;
            fadebubbleIntervalID = setInterval(fadeBubble,fadeIntervalTime);
            return;
        }
        // restart animation
        initBubbleDraw();
        return;
    }
    for (let i =0; i < cicleCenters.length; i++){
        ctx.beginPath();
        ctx.arc(cicleCenters[i][0],cicleCenters[i][1], radius, 0, 2*Math.PI,0);
        ctx.fillStyle = colors[cicleCenters[i][2]];
        ctx.fill();
    }
    radius+=deltaRadius;
}

function fadeBubble(){
    if (radius > Math.max(canvas.width,canvas.height)/2){
        clearInterval(fadebubbleIntervalID);
        ctx.clearRect(0,0,canvas.width,canvas.height);
        startTime =  Date.now();
        sinIntervalID =  setInterval(drawSin,sinIntervalTime);
        return;
    } 
    ctx.beginPath();
    ctx.arc(canvas.width/2,canvas.height/2, radius, 0, 2*Math.PI,0);
    ctx.fillStyle = "#000000";
    ctx.fill();
    radius += deltaRadius; // same speed
}

function initBubbleDraw(){
    radius = 5;
    var colorIndex = -1;
    const numBubbles = randomInt(4,9);
    for (let i =0; i < numBubbles; i++,colorIndex++){   
        if (colorIndex > colors.length) colorIndex = 0; // wrap around colors      
        let point = [randomInt(0,canvas.width), randomInt(0,canvas.height),colorIndex] // [x,y,colorIndex]
        cicleCenters.push(point);
    }
}

document.addEventListener('load',animate());
