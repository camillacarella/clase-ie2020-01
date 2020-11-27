// https://editor.p5js.org/codingtrain/sketches/OjCfrdWX

class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y);
    // this.vel = createVector(1, -1);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
  }

  update() {  
    
    let mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(1);
    
    this.vel.add(this.acc); 
    this.vel.limit(5);

    this.pos.add(this.vel);
  }

  show() {
   // stroke("blue");
    stroke("white");
    strokeWeight(2);
   // fill("yellow");
    fill("red");
    ellipse(this.pos.x, this.pos.y, 80);
    ellipse(this.pos.x, this.pos.y, 70);
    ellipse(this.pos.x, this.pos.y, 60);
    ellipse(this.pos.x, this.pos.y, 50);
    ellipse(this.pos.x, this.pos.y, 40);
    ellipse(this.pos.x, this.pos.y, 30);
    ellipse(this.pos.x, this.pos.y, 20);
    ellipse(this.pos.x, this.pos.y, 10);
  }
}