function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("pink");
  stroke("black")
  strokeWeight(3);
    //pelo
  push();
  noStroke()  
  let c = color("brown");
  fill(c);
  ellipse(200,150,90,100);
  ellipse(190,180,50,60);
  ellipse(210,180,50,60); 
  ellipse(200,200,80,70);
  pop();
 
  //brazos
push();  rect(95,200,200,20,10)
  fill("pink")
pop();
  //piernas new
rect(170,250,20,145,30);
  rect(210,250,20,145,30); 
  
  //vestido
  fill("yellow")
  triangle(200, 165, 250, 300, 150, 300); 
  
    //cara
  fill(240,205,205);
  ellipse(200, 150, 60, 70);
  
  //nariz
  point(198,160);
  point(202,160);
  
  //ojos
  push();
  fill(255);
ellipse(187,145,20,20);
  ellipse(213,145,20,20);
  pop();
  
  //pupilas
  push();
  fill("brown");
  noStroke()
  ellipse(187,150,15,10);
  ellipse(213,150,15,10);
  pop();
  
  //brillo
  push();
  fill(255);
  noStroke()
  ellipse(190,146,5,5);
  ellipse(216,146,5,5);
  pop();
  
  
}