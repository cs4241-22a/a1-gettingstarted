

let id = null;
let increaseSize = (element) => {
    let photoID = document.getElementById("photo1")
    let size = 40;
    let increasing = true;
    id = setInterval(() => {
        console.log(size)

        if(increasing) {
            size++;
            photoID.style.width = size + "%"
            if(size >= 80)
            {
                increasing = false;
            }
        } 
        else
        {
            size--;
            photoID.style.width = size + "%"
            if(size == 40)
            {
                clearInterval(id)
            }
        }
    }, 100);

    
}