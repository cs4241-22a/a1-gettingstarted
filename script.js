//this animation changes a square that cycles through
//RGB (color switch after each second)

//setInterval(a,b) calls function a at interval b

let globalColor = 0;

run = setInterval(doAnimation, 1000)

//every interval:
//get square element
//change its color


//color should start out as white
function doAnimation(){
  //where does getElementByID look? what is document?
  //document is an interface (already defined in the language)
  //animatedSquare references the CSS??
  const thingToAnimate = document.getElementById("animatedSquare");
  //references the HTML ^^^
  
  if (globalColor == 0) {
    
    thingToAnimate.style.color = 'red';
    globalColor++;
    
  } else if (globalColor == 1) {
    
    thingToAnimate.style.color = 'green';
    globalColor++
    
  }
  else{
    //globalColor == 2
    thingToAnimate.style.color = 'blue';
    globalColor = 0;
  }
  
}