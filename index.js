window.onload = () => {
    const homeButton = document.getElementById("home-button");

    homeButton.addEventListener("mouseenter", () => {
        homeButton.classList.add("hover");
    })
    
    homeButton.addEventListener("mouseleave", () => {
        homeButton.classList.remove("hover");
    })
}