//Creating fractal trees with L-SysteM

var len = 100; 			//length of the tree bough
var angle = 25; 		//angle of the tree bough
var axiom = "F";		//base case of the recursive function
var sentence = axiom;	//current status of the generating function

//Rules for the creation of the tree
var rules = [];

/*----------RULE OF L-SYSTEM---------
variables: F+-[]
axiom: F
rules: F -> FF+[+F-F-F]-[-F+F+F]
-------------------------------------*/
rules[0] = {
	a: "F",
	b: "FF+[+F-F-F]-[-F+F+F]"
}

//Creation of the generating chain of the tree structure
function generate(){
	//Decrease the length of the bough each time that the function is called
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

	//Graphicates the new tree
	turtle();
}

//Use of turtle graphication for the creation of the tree
function turtle(){
	//Restart the rotations and translations every time that the functions is called
	resetMatrix(); 

	stroke(255, 100);
	translate(width/2, height);
	
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

	createP(axiom);
	turtle();
	
	var button = createButton("generate"); //This is in the P5 library
	button.mousePressed(generate);
}

function draw(){
	
}