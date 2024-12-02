var crash=0;
function setup() {
	createCanvas(500, 500); 
}

function draw() {
  background(39,0,84); 
  stroke(245,255,172); 
  fill(245,255,172,255); 
  ellipse(0,0,45,45); 
  stroke(0,147,255); 
  strokeWeight(20);
  fill(0,255,81,255); 
  ellipse(500,500,80,80); 
  stroke(0,0,0);
  fill(0,0,0,255);
  ellipse(crash,crash,10,10);

}

function mousePressed() {
if (crash>=500){
  crash=0;
} else{

}
crash=crash+50;
}