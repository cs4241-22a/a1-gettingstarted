
/*

THIS IS A FAILED ATTEMPT AT ANIMATION. 


const text = document.querySelector("heading");
const stringText = text.textContent;
const splitIt = stringText.split("");

text.textContent = "";

for(let i = 0 ; i<splitIt.length ; i++){
    text.innerHTML += "<span>" + splitIt[i] + "</span>"
}

let char = 0;
let timer = setInterval(next,50);

function next{
    const span = text.querySelector("span")[char]
    span.classList
}

let i =0;

function animate(){
    if(i<stringText.length){
        document.getElementById("heading").innerHTML += stringText.charAt[i];
        i++;
        setTimeout(animate,50)
    }
}

animate();
*/