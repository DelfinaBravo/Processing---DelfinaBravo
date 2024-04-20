function setup() {
  createCanvas(500, 500); 
  background(255); 
  stroke(0); // Color de la línea (negro)
  translate(width / 2, height / 2);
}

function draw() {
   //Letra D
line(80, 100, 80,300); //izquierda
line(80, 100, 200, 110); //arriba
line(200, 110, 200,290); //derecha
line(80, 300, 200, 290); //abajo

  //Letra B
line(300, 100, 300, 200);
line(300, 100, 400, 100);
line(400, 100, 400, 200);
line(300, 200, 400, 200);

line(300, 300, 300, 200);
line(300, 300, 420, 300);
line(420, 300, 420, 200);
line(400, 200, 420, 200);



}
