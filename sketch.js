
let sketch;

function setup() {
  sketch = createCanvas(700, 400);
  sketch.parent("p5");
}

function draw() {
  
  // define color aleatorio 
  stroke(random(255), random(255), random(255));
  // defino un grosor aleatorio
  strokeWeight(random(2, 20));
  // dibujo un punto aleatorio
  point(random(10, width-10), random(10, height - 10));
  
}

