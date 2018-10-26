function setup() {
createCanvas(3000, 1000);
    noStroke();
}
function draw() {
}
if (mouseIsPressed) {
  fill(225, 0, 0);
}else {
  fill(115);
}
ellipse(mouseX, mouseY, 40, 40);

