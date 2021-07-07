function setup() {
  createCanvas(400, 400);
}

// Variables Declaration:
var xPositions = [0, 20, 50];
var yPositions = [0, 0, 0];

var r = 100;
var b = 0;
var g = 0;
var speeds = [2, 4, 8, 16];

// To draw one rain drop
var oneDropFalling = function(){
    for (var i = 0; i < xPositions.length; i++) {
        for (var j = 1; j <= 4; j++){
        ellipse(xPositions[i], yPositions[i] % 400, 1, 6);
        yPositions[i]+= speeds[speeds.length-[floor(random(1,4))]];
        }
    }
};

mouseClicked = function(){
    xPositions.push(mouseX);
    yPositions.push(mouseY);
};

function draw() {
    background(204, 247, 255);
    noStroke();
    fill(r, b, g);
    if (xPositions.length - 1 < 400){
        
        xPositions.push(floor(random(0, 400)));
        yPositions.push(0);
        }
    oneDropFalling();
}