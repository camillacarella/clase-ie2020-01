function setup() {
  createCanvas(700,700);
 stroke("white")
}

function draw() {
  background("purple");
  cruz(width/2,height/2,500,millis()/1000); 
}

function cruz(x,y,tam,rot){
  push();
  translate(x,y);
  rotate(rot);
  line(-tam / 2,0,tam / 2,0);
  line(0,-tam / 2,0,tam/2);
  if (tam > 20){
  cruz (-tam / 2, 0,tam/2, rot + QUARTER_PI);
    cruz (tam / 2, 0,tam/2, rot + QUARTER_PI);
    cruz (0,-tam / 2,tam/2, rot + QUARTER_PI);
    cruz (0,tam / 2,tam/2, rot + QUARTER_PI);
  }
  pop();
  
}