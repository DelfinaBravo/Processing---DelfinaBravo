let counter = 0; // Inicializa la variable de contador
let frameCountSeconds = 0; // Inicializa el conteo de cuadros para segundos
let colorChangeInterval = 120; // Intervalo para cambio de color 

function setup() {
  createCanvas(500, 500);
  background(255);
  noStroke(); 
}

function draw() {
  frameCountSeconds++; // Incrementa el conteo de cuadros
  
  if (frameCount % 120 == 0) { // Verifica si ha pasado 2 segundo
    counter+=2; // Incrementa el contador
    textSize(30);
     background(255);
    text(counter,240, 100);
   
    
  }
  
  if (counter % 3 == 0) { // Cambia el color cada 2 segundos
    fill(255, 0, 0); // Rojo
  } else if (counter % 3 == 1) {
    fill(0, 255, 0); // Verde
  } else {
    fill(0, 0, 255); // Azul
  }
  
  rect(150, 180, 200, 100); // Dibuja el rectángulo
  
  if (frameCountSeconds == colorChangeInterval) { // Resetea el conteo de cuadros después del intervalo de cambio de color
    frameCountSeconds = 0;
  }
}
