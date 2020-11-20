
let s1, s2, rad, turns, angInc;

function setup() {
  createCanvas(400, 400);
  s1 = createSlider(0, 2, 0.6, 0.0001); // rad
  s2 = createSlider(0, 20, 5, 1); //turns
  s3 = createSlider(0, PI, 0.5, 0.00001);
  
  noFill();
}

function draw() {
  translate(width/2, height/2);
  background("yellow");
  
  rad = s1.value();
  turns = s2.value();
  angInc = s3.value();
  
 let totalAng = turns * TWO_PI;
     
     
  stroke("red");
  strokeWeight(3);
  
  // espiral a partir del incremento del ángulo
  
  /*
  beginShape();
  for(let ang = 0; ang < turns * TWO_PI; ang += angInc){ 
    r += rad;
    // identidad circular
    let x = cos(ang) * r;
    let y = sin(ang) * r;
    vertex(x, y);
  }
  endShape();
  */
  
  // esperial a partir del incremento del radio
  
  let ang = 0;
  for(let r = 150; r > 0; r -= rad/turns){
    // identidad circular
    let x = cos(ang) * r;
    let y = sin(ang) * r;
    let escala = map(r, 0, 200, .1, 1);
    //vertex(x, y);
    escama(x, y, ang, escala);
    ang += angInc;
  }
}


function escama(x, y, ang, sc){
  push();
  translate(x, y);
  rotate(ang + HALF_PI);
  scale(sc);
  fill("blue");
  stroke(0, );
  triangle(-10, 0, 0, -20, 10, 0); 
  pop();
}