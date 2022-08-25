window.onload = () => {
    const homeButton = document.getElementById("home-button");
    const homeAccordion = document.getElementById("home-accordion");
    homeButton.addEventListener("mouseenter", () => {
        homeButton.classList.add("hover");
        homeAccordion.classList.add("hover");
    })  
    homeButton.addEventListener("mouseleave", () => {
        homeButton.classList.remove("hover");
    })
}