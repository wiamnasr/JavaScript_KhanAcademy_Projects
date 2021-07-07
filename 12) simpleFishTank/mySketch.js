function setup() {
  createCanvas(400, 400);
}

var drawBubbles = function(bubbleX, bubbleY, bubbleW, bubbleH){
    noStroke();
    fill(235, 235, 235);
    ellipse(bubbleX, bubbleY, bubbleW, bubbleH);
};

var drawFish = function(centerX, centerY, bodyLength, bodyHeight, bodyColor) {
    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
   
    
};

mouseClicked = function() {
    drawFish(mouseX, mouseY, -101, 29, color(0, 255, 242));
};


function draw() {
  background(89, 216, 255);
  drawBubbles(200, 200, 20, 20);
  drawBubbles(241, 241, 31, 27);
  drawBubbles(241, 289, 43, 40);
  drawBubbles(159, 241, 4, 6);
  drawBubbles(77, 241, 4, 6);
  drawBubbles(154, 230, 5, 6);
  drawBubbles(159, 221, 8, 8);
  drawBubbles(159, 241, 4, 6);
  drawFish(200, 100, 118, 74, color(162, 0, 255));


  drawFish(122, 248, 67, 27, color(21, 255, 0));
  drawFish(74, 284, 67, 27, color(21, 255, 0));
  drawFish(29, 298, 67, 27, color(21, 255, 0));
  drawFish(39, 236, 67, 27, color(21, 255, 0));
  drawFish(30, 264, 67, 27, color(21, 255, 0));
  drawFish(64, 222, 60, 23, color(21, 255, 0));
  drawFish(287, 327, -101, 29, color(0, 255, 242));
}