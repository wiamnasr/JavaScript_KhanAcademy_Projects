function setup() {
  createCanvas(400, 400);
}

var xPos = 0;
var yPos = 0;
var wStar = 10;
var hStar = 10;
var xPosufo = 76;

function draw() {
  background(24, 38, 120);
    
    // Moon
    noStroke();
    fill(240, 226, 226);
    ellipse(350, 30, 150, 150);
    
    // Moon Details
    strokeWeight(3);
    stroke(140, 135, 135);
    fill(135, 128, 128);
    ellipse(361, 50, 20, 10);
    ellipse(300, 65, 10, 6);
    ellipse(397, 12, 27, 30);
    ellipse(314, -2, -15, 19);
    ellipse(328, 97, 14, 10);
    ellipse(280, 27, 10, 10);
    ellipse(382, 93, 10, 10);
    
    // Night Sky:
    fill(171, 173, 111);
    ellipse(232, 27, -1, 1);
    ellipse(201, 49, -1, 1);
    ellipse(167, 70, -1, 1);
    ellipse(206, 75, -1, 1);
    ellipse(98, 181, -1, 1);
    ellipse(233, 68, -1, 1);
    ellipse(178, 90, -1, 1);
    ellipse(166, 97, -1, 1);
    ellipse(165, 109, -1, 1);
    ellipse(219, 150, -1, 1);
    ellipse(224, 134, -1, 1);
    ellipse(249, 134, -1, 1);
    ellipse(276, 145, -1, 1);
    ellipse(85, 30, -1, 1);
    ellipse(69, 100, -1, 1);
    ellipse(141, 14, -1, 1);
    ellipse(30, 30, -1, 1);
    
    // UFO Light
    noStroke();
    fill(176, 162, 162);
   triangle(xPosufo-1, 98, xPosufo-65, 246, xPosufo+76, 245);
    
    
    
    // Flying UFO
    noStroke();
    fill(110, 94, 94);
    arc(xPosufo, 88, 55, 44, 0, 180);
    stroke(143, 120, 120);
    strokeWeight(2);
    line(xPosufo+14, 90, xPosufo+22, 90);
    strokeWeight(6);
    line(xPosufo-36, 83, xPosufo+38, 84);
    noStroke();
    fill(110, 94, 94);
    arc(xPosufo, 78, 55, 44, 180, 360);
    stroke(143, 120, 120);
    strokeWeight(2);
    triangle(xPosufo-2, 57, xPosufo-1,44, xPosufo+14, 76);
    stroke(255, 0, 0);
    
    strokeWeight(3);
    point(xPosufo-1, 40);
    
     //Shooting Star
    noStroke();
    fill(237, 222, 7);
    ellipse(xPos, yPos, wStar, hStar);
   
   
    
    
    //Ground
    noStroke();
    fill(76, 117, 81);
    rect(0,243,400,163, 0);
    
    stroke(89, 80, 53);
    strokeWeight(21);
    line(41, 320, 40, 200);
    
    strokeWeight(6);
   triangle(44, 117, 106, 242, -19, 245);
   
   xPosufo++;
   xPos+=4;
   yPos+=4;
   wStar++;
   hStar++;
}