function setup() {
  createCanvas(400, 400);
}

function draw() {
    background(165, 219, 162);
    fill(255, 254, 222);
    rect(20, 100, 364, 200);


    
    fill(0, 0, 0);
    textSize(20);
    if(mouseIsPressed){
        text("JavaScript", 158, 200);
    } else{
        text("What programming language is this?", 39, 200);
    }
}