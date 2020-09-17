function setup() {
  createCanvas(720, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  background(204);
  dibujarRobot(120, 420, 110, 140);
  dibujarRobot(270, 460, 260, 95);
  dibujarRobot(420, 310, 80, 10);
  dibujarRobot(570, 390, 180, 40);
}

function dibujarRobot(x, y, alturaCuerpo, alturaCuello) {
  
var radius = 45; //radio
var ny = y - alturaCuerpo - alturaCuello - radius;
  
// Cuello
stroke(102);
line(x+2, y - alturaCuerpo, x+2, ny);
line(x+12, y - alturaCuerpo, x+12, ny); 
line(x+22, y - alturaCuerpo, x+22, ny);

  // Antenas
line(x+12, ny, x-18, ny-43);
line(x+12, ny, x+42, ny-99);
line(x+12, ny, x+78, ny+15);
  
// Cuerpo
noStroke();
fill(102);
ellipse(x, y-33, 33, 33);
fill(0);
rect(x-45, y - alturaCuerpo, 90, alturaCuerpo - 33);
fill(102);
rect(x-45, y - alturaCuerpo + 17, 90, 6);
  
// Cabeza
fill(0);
ellipse(x+12, ny, radius, radius);
fill(255);
ellipse(x+24, ny-6, 14, 14);
fill(0);
ellipse(x+24, ny-6, 3, 3);
fill(153);
ellipse(x, ny-8, 5, 5);
ellipse(x+30, ny-26, 4, 4);
ellipse(x+41, ny+6, 3, 3);
}
  
 
