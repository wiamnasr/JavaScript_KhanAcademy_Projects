function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 255, 247);
  stroke(173, 222, 237);



  for (var i = 0; i<20; i++){
    var lineY = 20 + (i * 20);
    line(0, lineY, 400, lineY);
    
  }

  for (var r=0; r<20; r++){
    var lineX = 20+(r*20);
    line(lineX, 0, lineX, 400);
  }
}