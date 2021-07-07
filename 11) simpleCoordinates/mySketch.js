function setup() {
  createCanvas(400, 400);
}

var x = 0;
var y = 0;

function draw() {
  fill(17, 0, 255);
  while(x<400){
    text(x, x, 10);
    x+=50;

  }
  while(y<400){
    text(y, 0, y);
    y+=50;
  }

}