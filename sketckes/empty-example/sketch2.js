function setup() {
createCanvas(1000, 1200);
}
function draw() {
if (mouseIsPressed) {
fill(225);
} else {
fill(175);
}
ellipse(mouseX, 80);
}