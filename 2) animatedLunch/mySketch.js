function setup() {
  createCanvas(400, 400);
}

function draw() {
  noStroke();
  background(247, 191, 151); // wooden table
  fill(194, 209, 196);
  ellipse(200, 200, 350, 350); // plate
  fill(230, 223, 223);
  stroke(199, 105, 105);
  ellipse(200, 200, 300, 300);

  noStroke();
  fill(255, 102, 0);
  bezier(160, 35, 326, 201, 349, -83, 183, 82);
  fill(117, 29, 117);
  ellipse(281, 43, 11, 12);

  bezier(197, 171, 349, 165, 164, -132, 235, 220);
  fill(255, 0, 0);
  ellipse(231, 69, 11, 12);


  fill(224, 125, 11);
  triangle(85, 100, 279, 351, 117, 70);
  ellipse(100, 83, 44, 42);
  fill(205, 129, 0);
  triangle(110, 80, 279, 351, 117, 70);

  // Carrot Top:
  fill(109, 199, 82);
  arc(90, 73, 63, -57, 97, 173);

  stroke(89, 179, 60);
  for (var carrotopmeter = 0; carrotopmeter < 10; carrotopmeter ++) {
   strokeWeight(3);
   line(90, 73, 90 - random(50), 73 - random(50));
  }

  // Carrot body:
  strokeWeight(4);
  stroke(205, 109, 0);
  line(123, 137, 137, 131);
  line(96, 110, 108, 103);

  stroke(250, 230, 10);
  strokeWeight(10);
  noFill();

  line(15, 134, 105, 180);
  line(7, 167, 78, 178);
  line(2, 142, 88, 177);
  line(21, 160, 105, 180);
  line(15, 182, 105, 187);
  line(62, 199, 105, 205);
  line(35, 181, 105, 180);
  line(9, 179, 105, 180);
  line(7, 198, 105, 190);
  line(-10, 172, 105, 180);

  beginShape();
  stroke(255, 10, 51);
  fill(255, 0, 0);
  vertex(73, 150);
  vertex(97, 168);
  vertex(91, 203);
  vertex(85, 204);
  vertex(140, 231);
  vertex(137, 230);
  vertex(147, 194);
  endShape(CLOSE);

  fill(232, 197, 136);
  arc(74, 233, 304, 236, -10, 67);
  fill(235, 26, 26);
  stroke(255, 0, 0);
  ellipse(140, 244, 18, 21);
  ellipse(148, 312, 18, 21);
  ellipse(115, 274, 18, 19);
  ellipse(201, 244, 18, 21);
  ellipse(101, 246, 18, 21);
  ellipse(171, 287, 18, 21);
  ellipse(171, 234, 18, 21);

}