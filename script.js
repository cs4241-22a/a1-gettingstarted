window.addEventListener('DOMContentLoaded', (event) => {
    const colorBar = document.getElementById('colorBar');
    let count = 0;
    setInterval(function(){
        colorBar.style.borderBottomColor = count%2==0 ? '#A13D63' : '#3A5A40';
        count++;
    }, 2000);
});