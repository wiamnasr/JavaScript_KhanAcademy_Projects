function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  
  background(0, 225, 255);
  noStroke();
  // The ground
  fill(85, 255, 0);
  rect(0, 300, 400, 100);  

  // The sun
  fill(255, 198, 84);
  ellipse(80, 64, 100, 100);  

  // The snowman
  fill(255, 255, 255);
  ellipse(200, 300, 150, 150);
  ellipse(200, 200, 100, 100);
  ellipse(200, 120, 75, 75);
 
}