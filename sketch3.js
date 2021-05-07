// References: p5.js sketch "elliptical orbit" by tht-jxny https://editor.p5js.org/tht-jxny/sketches/H1r4Vho-N
// and p5.js example on Scale https://p5js.org/examples/transform-scale.html

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
	// vel = createVector(0,-20);
	vel = createVector(0,-3);
}

function draw() {
  var acc = centre.copy();
    acc.sub(border);
    acc.setMag(0.25);
  	vel.add(acc);
    border.add(vel);
    // background(20,50);

    translate(200,200);
    noFill();
    // stroke(100);
    stroke(78, 77, 120);
    strokeWeight(1);
    rect(centre.x,centre.y, 5/border.y);
    stroke(78, 77, 120);
    strokeWeight(1);
    ellipse(border.x,border.y,centre.y);
    time++;
}
