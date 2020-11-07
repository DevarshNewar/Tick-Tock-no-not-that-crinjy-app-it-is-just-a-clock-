var hr, mn, sc;



function preload() {




}


function setup() {
	createCanvas(400, 400);

	angleMode(DEGREES);



}

function draw() {
	background(0);
	translate(200, 200);
	rotate(-90)

	hr = hour();
	mn = minute();
	sc = second();

	hrAngle = map(hr % 12, 0, 12, 0, 360)
	mnAngle = map(mn, 0, 60, 0, 360)
	scAngle = map(sc, 0, 60, 0, 360)


	// Hour clock
	push();
	rotate(hrAngle);
	stroke(0, 0, 255);
	strokeWeight(7);
	line(0, 0, 50, 0);
	pop();

	// Minute clock
	push();
	rotate(mnAngle);
	stroke(0, 255, 0);
	strokeWeight(7);
	line(0, 0, 75, 0);
	pop();



	// Second clock
	push();
	rotate(scAngle);
	stroke(255, 0, 0);
	strokeWeight(7);
	line(0, 0, 100, 0);
	pop();

	stroke(255, 0, 0);
	point(0, 0);
	noFill();
	strokeWeight(10);
	arc(0, 0, 300, 300, 0, scAngle);


	stroke(0, 255, 0);
	arc(0, 0, 280, 280, 0, mnAngle);


	stroke(0, 0, 255);
	arc(0, 0, 260, 260, 0, hrAngle);



}