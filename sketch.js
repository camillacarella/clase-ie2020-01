let sketch;


let b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  b = [];
  noStroke();
  background(0);
}


function mouseDragged() {
  b.push(new Boid(mouseX, mouseY));
  console.log("ahora b tiene " + b.length + " elementos");
}

function draw() {
  for (let t of b) {
    t.draw();
    t.move();
    if (t.age > t.maxAge) {
      b.splice(t, 1);
      console.log("ahora b tiene " + b.length + " elementos");
    }
  }


  // velo negro
  fill(0, 10);
  // circle(20,width, height );
  // ellipse(10, 10, width, height);
  rect(0, 0, width, height);
}

class Boid {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.a = random(TWO_PI);
    this.vel = random(0, 2);
    this.seed = round(random(100000));
    this.col = color(random(20, 140), random(50, 160), random(200, 250));
    this.maxAge = random(190, 1200);
    this.age = 0;
  }

  move() {
    this.x += cos(this.a) * this.vel;
    this.y += sin(this.a) * this.vel;
    noiseSeed(this.seed);
    this.a += noise(millis() / 600) - .5;
    this.age++;
    this.col.setAlpha(map(this.age, 0, this.maxAge, 255, 0));
  }

  draw() {
    push();
    translate(this.x, this.y);
    rotate(this.a);
    fill(this.col);
    //ellipse(10, 10, 5, 5);
    circle(5, 5, 20);
    //triangle(0, -2, 10, 0, 0, 2);
    pop();

  }

//function setup() {
 // sketch = createCanvas(800, 400);
  //sketch.parent("p5");
 // frameRate(4);// 
//}

//function draw() {
 // background(255);
 // for(let i = 0; i < 10; i++){
  // define color aleatorio 
  //stroke(random(255), random(255), random(255));
  // defino un grosor aleatorio
  //strokeWeight(random(2, 20));
  // dibujo un punto aleatorio
 // point(random(10, width-10), random(10, height-10));
}