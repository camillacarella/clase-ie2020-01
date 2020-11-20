let slider;
function setup() {
  createCanvas(400, 400);
  noStroke(2);
  slider = createSlider

}

function draw() {
  background(mouseX, mouseY, 180); //255);

  /*  init; test; incremet      */
  for (let x = 20; x <= width - 20; x += 30) {
    for (let y = 20; y <= height - 20; y += 20) {

      fill(x, y, );
      ellipse(x, y, 30);
    }
  }
}