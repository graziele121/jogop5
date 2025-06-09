function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
}
let solX = 50;
function setup() {
  createCanvas(800, 400);
  noStroke();
}
function draw() {
  background(135, 206, 235); // Céu azul
  // Sol
  fill(255, 204, 0);
  ellipse(solX, 80, 80, 80);
  solX += 0.5;
  if (solX > width + 40) solX = -40;
  // Grama
  fill(34, 139, 34);
  rect(0, 300, width, 100);
  // Árvore
  fill(139, 69, 19);
  rect(100, 220, 20, 80);
  fill(34, 139, 34);
  ellipse(110, 200, 80, 80);
  fill(255);
  // Trator
  fill(255, 0, 0);
  rect(500, 260, 80, 40);
  rect(530, 230, 30, 30);
  fill(0);
  ellipse(510, 300, 30, 30);
  ellipse(560, 300, 30, 30);
  // Texto Agrinho
  fill(255);
  textSize(24);
  textAlign(CENTER);
  text("Cuidando do Campo e do Futuro!", width / 2, 50);
}
