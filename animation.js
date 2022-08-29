var string = "Welcome / Willkommen";
var letters = string.split("");
var element = document.getElementById("homeHeader");
(function animate() {
  letters.length > 0
    ? (element.innerHTML += letters.shift())
    : clearTimeout(running);
  var running = setTimeout(animate, 150);
})();
