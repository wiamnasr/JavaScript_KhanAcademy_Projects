function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(219, 255, 255);

//roof

    for(var l=62; l<341; l+=10){
        fill(194, 74, 74);
        strokeWeight(2);
        stroke(191, 49, 49);
        triangle(l, 152, 200, 102, 200, 10);
    
    
    
    }

    stroke(194, 54, 54);
     fill(0, 0, 0);
     quad(209, 56, 229, 121, 261, 121, 238, 71);
     quad(210, 56, 229, 121, 233, 99, 228, 80);
     quad(237, 71, 259, 121, 239, 99, 234, 83);
}