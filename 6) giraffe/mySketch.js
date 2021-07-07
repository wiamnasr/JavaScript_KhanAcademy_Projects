function setup() {
  createCanvas(400, 400);
}

var x = 140;
var y = 170;
var eyeSize = 10;

function draw() {
  noStroke();
  background(179, 129, 129);
    
    // Head:
  beginShape();
  fill(194, 143, 68);
  triangle( x- eyeSize*0.7,  y+eyeSize*2.9, x+eyeSize*8.2,  y+eyeSize*2.7,  x+eyeSize*4,  y+eyeSize*33.4);
  noFill();


  //nose and mouth area
  noFill();
  fill(222, 180, 116);
  beginShape();
  vertex( x+eyeSize*3.6,  y+eyeSize*12.2);
  vertex( x+eyeSize*1.9,  y+eyeSize*8.6);
  vertex( x+eyeSize*3.4,  y+eyeSize*12.1);
  vertex( x+eyeSize*1.7,   y+eyeSize*8);
  vertex( x+eyeSize*2.5,  y+eyeSize*6.6);
  vertex( x+eyeSize*2.8,  y+eyeSize*4.2);
  vertex( x+eyeSize*0.9,  y+eyeSize*6.6);
  vertex( x+eyeSize*1.3,  y+eyeSize*11);
  vertex( x+eyeSize*2.5,  y+eyeSize*12.1);
  vertex( x+eyeSize*5.3,  y+eyeSize*12.1);
  vertex( x+eyeSize*6.5,  y+eyeSize*10.9);
  vertex( x+eyeSize*6.9,  y+eyeSize*6.3);
  vertex( x+eyeSize*5.3,  y+eyeSize*3.8);
  vertex( x+eyeSize*5.8,  y+eyeSize*8);
  vertex( x+eyeSize*4.9,  y+eyeSize*12.1);
  endShape(CLOSE);
  noFill();
  fill(135, 92, 40);
  triangle( x+eyeSize*2.8,  y+eyeSize*6.7,  x+eyeSize*5.5,  y+eyeSize*6.6,  x+eyeSize*4.2,  y+eyeSize*8.8);
  triangle( x+eyeSize*((198-138)/10),  y+eyeSize*((231-142)/10),  x+eyeSize*((188-138)/10), y+eyeSize*((239-142)/10),  x+eyeSize*((192-138)/10),  y+eyeSize*((244-142)/10));
  triangle( x+eyeSize*((161-138)/10),  y+eyeSize*((234-142)/10),  x+eyeSize*((168-138)/10),  y+eyeSize*((246-142)/10),  x+eyeSize*((170-138)/10),  y+eyeSize*((240-142)/10));
  noFill();
  //face cheeks
  fill(214, 141, 62);
  beginShape();
  vertex( x+eyeSize*((189-138)/10),  y+eyeSize*((180-142)/10));
  vertex( x+eyeSize*((166-138)/10),  y+eyeSize*((185-142)/10));
  vertex( x+eyeSize*((147-138)/10),  y+eyeSize*((80-142)/10));
  vertex( x+eyeSize*((127-138)/10),  y+eyeSize*((102-142)/10));
  vertex( x+eyeSize*((121-138)/10),  y+eyeSize*((142-142)/10));
  vertex( x+eyeSize*((147-138)/10),  y+eyeSize*((206-142)/10));
  vertex( x+eyeSize*((166-138)/10),  y+eyeSize*((183-142)/10));
  vertex( x+eyeSize*((166-138)/10),  y+eyeSize*((209-142)/10));
  vertex( x+eyeSize*((193-138)/10),  y+eyeSize*((207-142)/10));
  vertex( x+eyeSize*((190-138)/10),  y+eyeSize*((180-142)/10));
  vertex( x+eyeSize*((205-138)/10),  y+eyeSize*((81-142)/10));
  vertex( x+eyeSize*((228-138)/10),  y+eyeSize*((142-142)/10));
  vertex( x+eyeSize*((208-138)/10),  y+eyeSize*((205-142)/10));
  vertex( x+eyeSize*((190-138)/10),  y+eyeSize*((179-142)/10));
  vertex( x+eyeSize*((205-138)/10),  y+eyeSize*((80-142)/10));
  vertex( x+eyeSize*((202-138)/10),  y+eyeSize*((99-142)/10));
  endShape(CLOSE);
  noFill();

  // eyes:
  fill(158, 91, 60);
  quad(x+eyeSize*((127-138)/10), y+eyeSize*((139-142)/10),x+eyeSize*((140-138)/10),  y+eyeSize*((130-142)/10),   x+eyeSize*((149-138)/10),  y+eyeSize*((154-142)/10),   x+eyeSize*((137-138)/10),  y+eyeSize*((149-142)/10));
  quad( x+eyeSize*((224-138)/10), y+eyeSize*((139-142)/10),  x+eyeSize*((216-138)/10),  y+eyeSize*((129-142)/10),  x+eyeSize*((204-138)/10),  y+eyeSize*((154-142)/10),  x+eyeSize*((217-138)/10),  y+eyeSize*((149-142)/10));
  fill(5, 5, 5);
  ellipse( x,  y, eyeSize, eyeSize);
  ellipse( x+ eyeSize*7.7,  y, eyeSize, eyeSize);
  fill(250, 247, 247);
  ellipse( x,  y, eyeSize/2, eyeSize/2);
  ellipse( x+eyeSize*7.6,  y, eyeSize/2, eyeSize/2);
  noFill();
  //forehead:
  fill(166, 110, 66);
  quad( x+eyeSize*((148-138)/10),  y+eyeSize*((80-142)/10),  x+eyeSize*((206-138)/10),  y+eyeSize*((80-142)/10),  x+eyeSize*((185-138)/10),  y+eyeSize*((111-142)/10),  x+eyeSize*((167-138)/10),  y+eyeSize*((111-142)/10));
  quad( x+eyeSize*((127-138)/10),  y+eyeSize*((99-142)/10),  x+eyeSize*((172-138)/10),  y+eyeSize*((134-142)/10),  x+eyeSize*((186-138)/10),  y+eyeSize*((134-142)/10),  x+eyeSize*((166-138)/10),  y+eyeSize*((111-142)/10));
  quad(  x+eyeSize*((221-138)/10),  y+eyeSize*((100-142)/10),   x+eyeSize*((186-138)/10),  y+eyeSize*((135-142)/10),  x+eyeSize*((185-138)/10),  y+eyeSize*((111-142)/10),  x+eyeSize*((206-138)/10), y+eyeSize*((82-142)/10));
  noFill();
  //ears:
  fill(217, 163, 122);
  triangle( x+eyeSize*((127-138)/10),  y+eyeSize*((100-142)/10),  x+eyeSize*((99-138)/10),  y+eyeSize*((96-142)/10),  x+eyeSize*((121-138)/10),  y+eyeSize*((143-142)/10));
  triangle( x+eyeSize*((221-138)/10),  y+eyeSize*((98-142)/10),  x+eyeSize*((249-138)/10),  y+eyeSize*((93-142)/10), x+eyeSize*(( 229-138)/10),  y+eyeSize*((144-142)/10));
  quad( x+eyeSize*((100-138)/10),  y+eyeSize*((96-142)/10),  x+eyeSize*((68-138)/10),  y+eyeSize*((108-142)/10),  x+eyeSize*((79-138)/10),  y+eyeSize*((134-142)/10),  x+eyeSize*((121-138)/10),  y+eyeSize*((143-142)/10));
  quad(x+eyeSize*((99-138)/10), y+eyeSize*((95-142)/10),  x+eyeSize*((34-138)/10),  y+eyeSize*((86-142)/10),  x+eyeSize*((26-138)/10),  y+eyeSize*((94-142)/10),  x+eyeSize*((68-138)/10),  y+eyeSize*((110-142)/10));
  triangle( x+eyeSize*((26-138)/10),  y+eyeSize*((95-142)/10),  x+eyeSize*((79-138)/10),  y+eyeSize*((135-142)/10),  x+eyeSize*((71-138)/10),  y+eyeSize*((110-142)/10));
  quad( x+eyeSize*((248-138)/10),  y+eyeSize*((93-142)/10),  x+eyeSize*((276-138)/10),  y+eyeSize*((102-142)/10),  x+eyeSize*((265-138)/10),  y+eyeSize*((125-142)/10),  x+eyeSize*((228-138)/10),  y+eyeSize*((143-142)/10));
  quad( x+eyeSize*((248-138)/10),  y+eyeSize*((93-142)/10),  x+eyeSize*((329-138)/10),  y+eyeSize*((81-142)/10),  x+eyeSize*((340-138)/10),  y+eyeSize*((90-142)/10),  x+eyeSize*((274-138)/10),  y+eyeSize*((106-142)/10));
  triangle( x+eyeSize*((339-138)/10),  y+eyeSize*((89-142)/10),  x+eyeSize*((266-138)/10),  y+eyeSize*((124-142)/10),  x+eyeSize*((273-138)/10),  y+eyeSize*((106-142)/10));
  noFill();
  fill(163, 124, 85);
  triangle( x+eyeSize*((146-138)/10),  y+eyeSize*((79-142)/10),  x+eyeSize*((153-138)/10),  y+eyeSize*((108-142)/10),  x+eyeSize*((166-138)/10),  y+eyeSize*((111-142)/10));
  triangle( x+eyeSize*((167-138)/10),  y+eyeSize*((111-142)/10),  x+eyeSize*((186-138)/10),  y+eyeSize*((133-142)/10),  x+eyeSize*((184-138)/10),  y+eyeSize*((111-142)/10));
  triangle( x+eyeSize*((220-138)/10),  y+eyeSize*((99-142)/10),  x+eyeSize*((215-138)/10),  y+eyeSize*((107-142)/10),  x+eyeSize*((230-138)/10),  y+eyeSize*((145-142)/10));
  triangle( x+eyeSize*((155-138)/10),  y+eyeSize*((121-142)/10),  x+eyeSize*((164-138)/10),  y+eyeSize*((171-142)/10),  x+eyeSize*((168-138)/10),  y+eyeSize*((106-142)/10));
  triangle( x+eyeSize*((197-138)/10),  y+eyeSize*((123-142)/10),  x+eyeSize*((182-138)/10),  y+eyeSize*((106-142)/10),  x+eyeSize*((191-138)/10),  y+eyeSize*((170-142)/10));
  fill(117, 103, 34);
  quad( x+eyeSize*((170-138)/10),  y+eyeSize*((133-142)/10),  x+eyeSize*((165-138)/10),  y+eyeSize*((171-142)/10),  x+eyeSize*((191-138)/10),  y+eyeSize*((170-142)/10),  x+eyeSize*((186-138)/10),  y+eyeSize*((135-142)/10));
  triangle( x+eyeSize*((166-138)/10),  y+eyeSize*((123-142)/10),  x+eyeSize*((163-138)/10),  y+eyeSize*((170-142)/10),  x+eyeSize*((176-138)/10),  y+eyeSize*((170-142)/10));
}