//Creating fractal trees with L-SysteM

//----------RULE OF L-SYSTEM---------
//variables: F+-[]
// axiom: F
// rules: F -> FF+[+F-F-F]-[-F+F+F]

var axiom = "F";
var sentence = axiom;
var len = 100;
var angle;

//Rule for the convertion of A's
var rules = [];
rules[0] = {
	a: "F",
	b: "FF+[+F-F-F]-[-F+F+F]"
}

function generate(){
	len *= 0.5;
	var nextSentence = "";
	for(var i=0; i<sentence.length; i++){
		var current = sentence.charAt(i);
		var found = false;
		for(var j=0; j<rules.length; j++){
			if(current == rules[j].a){
				found = true;
				nextSentence += rules[j].b;
				break;
			}
		}
		if(!found){
			nextSentence += current;
		}
	}
	sentence = nextSentence;
	createP(sentence);
	turtle();
}

//This function uses turtle graphics
function turtle(){
	resetMatrix(); //Restart the rotations and translations every time that the functions is called
	translate(width/2, height);
	stroke(255, 100);
	for(var i=0; i<sentence.length; i++){
		var current = sentence.charAt(i);

		if(current == "F"){
			line(0,0,0, -len);
			translate(0,-len);
		} else if(current == "+"){
			rotate(angle);
		} else if(current == "-"){
			rotate(-angle);
		} else if(current == "["){
			push();
		} else if(current == "]"){
			pop();
		}
	}
}

function setup(){
	createCanvas(400,400);
	background(51);
	angle = radians(25);
	createP(axiom); //Print the letter
	turtle();
	var button = createButton("generate"); //This is in the P5 library
	button.mousePressed(generate);
}

function draw(){
	
}