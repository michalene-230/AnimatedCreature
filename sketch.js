let x = 0;
let y = 150;
let z = 35;
let q = 55;

function setup() {
  createCanvas(400, 400);
  //x is horiz, y is vert
}

function draw() {

  background(111,4,130);
  
  
  //face
  fill(102,252,3);
  strokeWeight(2);
  rect(175,100,60,60);
  
  //antennas
  fill(102,252,3);
  line(100,30,180,100);
  line(300,30,233,100);
  
  //body
  rect(195,160,25,100);
  
  // right arm
  triangle(197,170,100,150,197,200);
 
  
  //left arm
  triangle(219,202,220,170,300,160);

  //legs
  fill(102,252,3);
  triangle(197,255,197,300,140,300);
  triangle(220,255,275,300,225,300);
  
  //eyes
  fill(207,39,120);
  ellipse(190,120,10,10);
  ellipse(220,120,10,10);
  
  //planet 
  fill(233,107,83);
  ellipse(60,90,70,70);
  
  //planet ring
  fill(150,206,180);
  triangle(0,95,70,80,130,90);
  
  //other circle planets
  
  //blue planet
  fill(29,43,83);
  ellipse (165,z,10,10);
  
  z= z - 0.5;
   if (z < -100)
      {
      z=35;
      }
  
  //purple planet
  fill(126,37,83);
  ellipse (250,q,15,15);
  
  q= q - 0.8;
   if (q < -100)
      {
      q=55;
      }
  
  //pink
  fill(255,0,77);
  ellipse (375, x ,35,35);
  
  x = x + 1;
  
  if (x > 500)
      {
      x=0;
      }
  
  //yellow
  fill(250,239,93);
  ellipse(22,y,20,20);
  
  y=y + 1
  if (y > 300)
      {
      y=150;
      }
  
    //ground
     fill(107,99,77);
  rect(0,300,400,100);
  
  //ground pebbles
  fill(205, 194, 165);
    ellipse(330,320,30,10);
    ellipse(235,350,90,20);
    ellipse(100,320,40,10);
    ellipse(85,370,25,10);
    ellipse(45,313,25,10);
    ellipse(25,355,70,10);
    ellipse(350,355,70,10);
    ellipse(330,390,70,10);
  
  
  //right landscape
  fill(46, 7, 63);
    triangle(15,300,65,215,100, 300);  
  fill(0, 60, 67);
    triangle(50,300,97,245,130, 300);  

  //left landscape
  fill(190, 215, 220);
    triangle(320,300,330,215,375, 300); 
  fill(253, 175, 123)
    triangle(350,300,360,250,390, 300);  

  
}