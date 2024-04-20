function preload() {
  
  img = loadImage('data/cruz.png')
}

function setup() {
  createCanvas(800, 800);
  imageMode(CENTER);
  // Posición inicial de la imagen
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(255,125,0);
  // Dibuja la imagen en la posición actual (x, y)
  image(img, x, y);

  
  if (keyIsDown(65)) {
    x -= 5;
  }
  if (keyIsDown(68)) {
    x += 5;
  }
  if (keyIsDown(87)) {
    y -= 5;
  }
  if (keyIsDown(83)) {
    y += 5;
  }
}
