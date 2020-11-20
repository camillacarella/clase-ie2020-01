

var x = 0;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  background(204, 0, 153);
  //scale(mouseX / 400);
  scale(0.5);
  translate(x, 0);
  noStroke();
  smooth();

  x = x + 1;

  /*
  
    //arduino
    fill(50,50,200);
    rect(20,20,140,100,6);
    fill(200);
    rect(15,40,30,25);
    fill(255,255,0);
    rect(40,80,3,5);
    rect(40,90,3,5);
    fill(60);
    rect(85,40,50,16);
    rect(88,37,3,22);
    rect(96,37,3,22);
    rect(104,37,3,22);
    rect(112,37,3,22);
    rect(120,37,3,22);
    rect(128,37,3,22);
    rect(30,25,120,6);
    rect(30,105,120,6);
  */
  
 // lienas tracera decoracion fondo
  //stroke(180, 0, 123);
  strokeWeight(30);
  line(-410, 0, 40, 400);
  line(-350, 0, 100, 400);
  line(-290, 0, 100, 400);
  line(-230, 0, 160, 400);
  line(-170, 0, 220, 400);
  line(-110, 0, 280, 400);
  line(-50, 0, 340, 400);
  line(10, 0, 400, 400);
  line(70, 0, 460, 400);
  line(130, 0, 520, 400);
  line(190, 0, 580, 400);
  line(250, 0, 640, 400);
  line(310, 0, 700, 400);
  line(370, 0, 760, 400);

  strokeWeight(0);
  line(10, 0, 400, 400);

  //pelo
  fill(77, 48, 0);
  rect(100, 60, 240, 340, 100);

  //cara
  fill(255, 204, 102);
  rect(100, 100, 200, 200, 90);

  //oreja
  noStroke();
  fill(255, 204, 102);
  rect(280, 170, 40, 60, 80);

  //ojos
  noStroke();
  fill(0);
  ellipse(200, 200, 15, 25);
  ellipse(120, 200, 15, 25);

  fill(255);
  ellipse(202, 195, 5, 5);
  ellipse(122, 195, 5, 5);


  //mouse
  fill(255, 0, 0);
  arc(160, 250, 30, 30, 0, HALF_PI + HALF_PI);

  //poleron
  fill("pink");
  rect(90, 319, 240, 340, 90);

  //cuello
  noStroke();
  fill(255, 204, 102);
  rect(180, 280, 60, 50);

  //cierre
  fill(150);
  rect(207, 320, 6, 80);
  fill(250);
  triangle(160, 320, 260, 320, 210, 360);
  fill(255, 204, 102);
  triangle(180, 320, 240, 320, 210, 340);

  //pelo 2
  fill(77, 48, 0);
  stroke(77, 48, 0);
  bezier(300, 100, 150, 6, 48, 106, 310, mouseY + 250);
  bezier(200, 60, 200 + (mouseY * 0.2), 66, 70, 50, 100, 220);
  bezier(200, 60, 200 - (mouseY * 0.2), 66, 70, 50, 100, mouseY + 200);

  var goingUp = mouseY;
  if (goingUp > 0) {
    goingUp = mouseY -= 3;
  } else {
    //cheek
    noStroke();
    fill(255, 0, 200, 40);
    // filter(BLUR,3); //-> when I use the BLUR function, it's so slow! 
    ellipse(240, 240, 50, 30);
    ellipse(110, 240, 40, 20);
  }

}