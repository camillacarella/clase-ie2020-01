var limite = 0;
var cantidad = 1;

function setup() {
  createCanvas(400, 400)
  frameRate(15)
}

function draw() {
  background("orange")
  noFill()
  stroke("purple")
  
  var diametro = 20
  
  for (var x = 0; x < limite; x += 1) {
    ellipse(200, 200, diametro, diametro)  
    diametro += 20
  }
  
  if (limite > 25) {
  cantidad = -1
} else if (limite < 0) {
  cantidad = 1
}

  limite += cantidad

}