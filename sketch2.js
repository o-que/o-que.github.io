// References: p5.js sketch "elliptical orbit" by tht-jxny https://editor.p5js.org/tht-jxny/sketches/H1r4Vho-N
// and p5.js example on Simple Shapes https://p5js.org/examples/hello-p5-simple-shapes.html

var canvas;

var centre;
var border;
var time = 0;
var vel;

var a = 0.0;
var s = 0.0;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  centre = createVector(0,0);
  border = createVector(150,0);
	vel = createVector(0,-20);
}

function draw() {
	var acc = centre.copy();
  acc.sub(border);
  acc.setMag(0.15);
	vel.add(acc);
  border.add(vel);
  background(4, 35, 51, 5);


    //Slowly increase 'a' and then animate 's' with
  //a smooth cyclical motion by finding the cosine of 'a'
  a = a + 0.04;
  s = cos(a) * 1.5;
  // s = cos(a);

  translate(width / 4.5, height / 3.5);
  scale(s);
  fill(0);
  stroke(255);
  strokeWeight(.5);
  for (let i = 0; i < 10; i ++) {
  ellipse(border.x, border.y, 20, 20);
  rotate(PI/5);
  }

  translate(width / border.y, height / border.x);
  scale(s/2);
  fill(0);
  stroke(255);
  strokeWeight(.5);
  for (let i = 0; i < 10; i ++) {
  rect(border.y, border.x, 10, 10);
  rotate(PI/5);
  }

}
