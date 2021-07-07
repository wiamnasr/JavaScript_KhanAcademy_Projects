function setup() {
  createCanvas(400, 400);
}

var from = (225, 209, 255);
var to = (0, 138, 207);
var interA = (from,to,0.33);
var interB =(from,to,0.66);
var f = createFont("cursive");

function draw() {
  fill(from);
  rect(0,0, 100, 400);
  fill(interA);
  rect(100,0, 100, 400);
  fill(interB);
  rect(200,0,100,400);
  fill(to);
  rect(300,0,100,400);


  fill(255, 0, 13);
  beginShape();
  vertex(143, 255);
  bezierVertex(264, 8, 65, 27, 62, 105);
  bezierVertex(-49, 68, -219, 175, 143, 255);
  endShape();

  beginShape();
  vertex(143, 255);
  bezierVertex(264, 8, 65, 27, 62, 95);
  bezierVertex(-49, 53, -219, 175, 143, 255);
  endShape();
  fill(184, 108, 108);
  beginShape();
  vertex(150, 239);
  bezierVertex(255, 24, 83, 29, 74, 116);
  bezierVertex(19, 80, -203, 134, 142, 257);
  endShape();
  fill(235, 124, 134);
  beginShape();
  vertex(142, 258);
  bezierVertex(255, 27, 82, 3, 71, 112);
  bezierVertex(19, 64, -224, 140, 112, 245);
  endShape();
  fill(168, 92, 99);
  beginShape();
  vertex(141, 250);
  bezierVertex(255, 23, 51, 20, 86, 140);
  bezierVertex(92, 90, -217, 79, 6, 201);
  endShape();

  //chocolate box base
  fill(255, 0, 13);
  beginShape();
  vertex(282, 237);
  bezierVertex(390, 8, 155, 6, 179, 102);
  bezierVertex(21, 82, 35, 297, 282, 237);
  endShape();

  //chocolate box edges
  fill(250, 132, 132);
  beginShape();
  vertex(264, 222);
  bezierVertex(381, 4, 153, 3, 160, 102);
  bezierVertex(21, 94, 43, 273, 264, 222);
  endShape();

  //chocolate box inner edges
  fill(255, 0, 0);
  beginShape();
  vertex(260, 213);
  bezierVertex(370, 18, 158, 8, 163, 108);
  bezierVertex(31, 95, 45, 268, 260, 213);
  endShape();

  //chocolate box ground
  fill(168, 98, 98);
  beginShape();
  vertex(260, 213);
  bezierVertex(359, 31, 185, 13, 174, 125);
  bezierVertex(73, 94, 43, 273, 260, 213);
  endShape();



  //first chocolate piece
  fill(89, 55, 55);
  rect(128,133,45,39);
  rotate(45);
  rect(194,-18,40,39);

  rotate(-45);
  fill(196, 82, 47);
  ellipse(150, 153, 44, 47);

  //second chocolate piece
  fill(89, 55, 55);
  rotate(2);
  rect(209,67,63,25);
  fill(196, 82, 47);
  rotate(-2);
  ellipse(236, 88, 78, 28);

  //third chocolate piece
  fill(218, 129, 230);
  beginShape();
  vertex(221, 184);
  bezierVertex(247, 143, 197, 125, 207, 158);
  bezierVertex(182, 153, 176, 179, 221, 184);
  endShape();

  //fourth chocolate piece
  fill(207, 101, 56);
  ellipse(256, 132, 51, 50);
  fill(218, 129, 230);
  beginShape();
  vertex(270, 148);
  bezierVertex(272, 83, 246, 127, 257, 127);
  bezierVertex(207, 133, 275, 153, 270, 148);
  endShape();
  fill(250, 245, 245);
  ellipse(262, 123, 7, 8);
  ellipse(208, 175, 6, 6);

  //fifth chocolate piece
  fill(207, 101, 56);
  rect(134,185,68,32, 30);

  //header
  textSize(26);
  text("Chocolate Fashion", 76, 20, 227, 50);
  text("Chocolate Fashion", 79, 20, 227, 50);

  // Ad text
  textSize(17);
  fill(158, 158, 40);
  text("Catering your Favourite Events!", 76, 268, 279, 50);
  fill(68, 42, 77);
  text("Catering your Favourite Events!", 74, 268, 279, 50);
  text("Weddings", 30, 306, 279, 50);
  text("Birthdays", 33, 356, 279, 50);
  text("Gifting", 223, 306, 279, 50);
  text("Baby Shower", 224, 358, 279, 50);

  image(getImage("creatures/BabyWinston"), 347, 319, 42, 62);
  image(getImage("cute/ChestOpen"), 118, 275, 40, 48);
  image(getImage("cute/ChestLid"), 300, 276, 42, 62);
  image(getImage("cute/Star"), 119, 319, 50, 78);

  textFont(f, 14);
  fill(68, 0, 255);
  text("With Love", 0, 136);

}