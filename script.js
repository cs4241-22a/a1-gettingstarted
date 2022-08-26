

let id = null;
let increaseSize = (element) => {
    let photoID = document.getElementById("photo1")
    let size = 20;
    let increasing = true;
    id = setInterval(() => {

        if(increasing) {
            size += .5;
            photoID.style.width = size + "%"
            if(size >= 30)
            {
                increasing = false;
            }
        } 
        else
        {
            size -= .5;
            photoID.style.width = size + "%"
            if(size == 20)
            {
                clearInterval(id)
            }
        }
    }, 100);

    
}