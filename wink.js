const img = document.getElementById("banner");
var tid = setInterval(wink, 5000);

function wink() {
  img.src =
    "https://cdn.glitch.global/4f01ab81-a818-456f-a13c-b7405afa7d35/LogoBannerBlink.png?v=1661636131893";
  setTimeout(
    () =>
      (img.src =
        "https://cdn.glitch.global/4f01ab81-a818-456f-a13c-b7405afa7d35/LogoBanner.png?v=1661636129036"),
    900
  );
}
