function setup() {
createCanvas(3000, 1000);
}
function draw() {
    fill(10)
}
if (mouseIsPressed) {
  fill(225, 0, 0);
}else {
  fill(115);
}
ellipse(mouseX, mouseY, 40, 40);

