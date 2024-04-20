let angulo = 0; // Ángulo inicial (en grados)
let longitud = 150; // Longitud de la línea
let speed = 1; // Velocidad de rotación
let colors; // Array de colores para la transición

function setup() {
  createCanvas(400, 400);
  colors = [color(255, 0, 0), color(0, 255, 0), color(0, 0, 255)]; // Rojo, verde, azul
}

function draw() {
  // Calcula las coordenadas del extremo de la línea
  let x2 = width / 2 + longitud * cos(radians(angulo));
  let y2 = height / 2 + longitud * sin(radians(angulo));
  
  // Transición de color
  let colorActual = lerpColor(colors[0], colors[1], angulo / 360);
  
  // Dibuja la línea desde el centro hasta el extremo con el color actual
  stroke(colorActual);
  line(width / 2, height / 2, x2, y2);
  
  // Incrementa el ángulo para la próxima iteración
  angulo += speed;
  
  // Reinicia el ángulo cuando alcanza 360 grados
  if (angulo >= 360) {
    angulo = 0;
    // Cambia los colores para la siguiente transición
    colors.push(colors.shift()); // Mueve el primer color al final del array
  }
}
