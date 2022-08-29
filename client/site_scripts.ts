import P5 from "p5"

const enterSiteButton = <HTMLButtonElement>document.getElementById("enter-site");

enterSiteButton.addEventListener("click", function () {
	document.getElementById("details").scrollIntoView();
});

// Animations with p5 js
const sketch = (p5: P5) => {
	p5.setup = () => {
		const canvas = p5.createCanvas(window.innerWidth-20, window.innerHeight - 200);
		canvas.parent("sketch");
		p5.background(`#A0BED1`);
		p5.fill("red");
		p5.strokeWeight(0);

		window.addEventListener("resize",
			(event) => {p5.resizeCanvas(window.innerWidth-20, window.innerHeight - 200)});
	}

	p5.draw = () => {
		if (p5.mouseIsPressed)
			p5.background(`#A0BED1`)
		p5.circle(p5.mouseX, p5.mouseY, 20);
	}
}

new P5(sketch);