function setup() {
createCanvas(1000, 1000);
    noStroke();
}
function draw() {
    background(0, 255, 0);
    
if (mouseIsPressed) {
fill(225, 0, 0);
} else {
fill(115);
}
ellipse(mouseX, mouseY, 40, 40);
}