function setup() {
  createCanvas(700, 400);
}

function draw() {
  stroke(random(255), random(255), random(255));
  strokeweight(random(2, 20));
  point(random(width), random(height));
}