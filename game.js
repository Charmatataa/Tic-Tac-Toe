let w;
let h;
let turn = 0;
let squares = new Array();
let restartButton;

function setup() {
	createCanvas(400, 400);
	restartButton = createButton("Restart");
	restartButton.position(20, height+20);
	restartButton.mousePressed(start);

	textAlign(CENTER,CENTER);
	textSize(80);

	w = floor(width/3);
	h = floor(height/3);

	start();
}

//Removes any previous objects from squares array and creates 9 new square instances
function start(){
	squares.splice();
	for (var i = 0; i < 3; i++) {
		squares[i] = [];
		for (var j = 0; j < 3;j++) {
			squares[i][j] = new Square(w*j,h*i);
		}
	}
}

function mouseClicked(){
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			if(squares[i][j].isMouseInside(mouseX,mouseY)){
				squares[i][j].onClick();
			}
		}
	}
}

function draw() {
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			squares[i][j].update();
		}
	}
}
