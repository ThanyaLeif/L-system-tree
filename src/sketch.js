//Creating fractal trees with L-SysteM

//----------RULES OF L-SYSTEM---------
//variables: A B
// axiom: A
// rules: (A -> AB), (B -> A)

var axiom = "A";
var sentence = axiom;

//Rule for the convertion of A's
var rules = [];
rules[0] = {
	a: "A",
	b: "AB"
}

//Rule for the convertion of B's
rules[1] = {
	a: "B",
	b: "A"
}

function generate(){
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
}

function setup(){
	noCanvas();
	createP(axiom); //Print the letter
	var button = createButton("generate"); //This is in the P5 library
	button.mousePressed(generate);
}

function draw(){
	
}