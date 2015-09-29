var images = new Array();
var song = new Audio('hollaback.mp3');
images[0] = new Image();
images[0].src = 'shoe.jpe';

images[1] = new Image();
images[1].src = 'pickle.jpg';

images[2] = new Image();
images[2].src = 'banana.png';

//images[3] = new Image();
//images[3].src = 'lemon.jpeg';

var score = 0;
var guessed = false;
var randomIndex = 0;
var level = 0;

var x = document.getElementById("game");
var startButton = document.getElementById("startButton");

window.onload = function() {
document.getElementById("startButton").onclick = function (){

alert("GET READY TO ROLL PEASANT");
	song.play()
	song.loop = true;

	randomIndex = Math.floor(Math.random()*images.length);
	document.getElementById("game").innerHTML="";
	document.getElementById("game").appendChild(images[randomIndex]);
	document.getElementById("game").style.width = "-500px";
//	document.getElementById("game").style.paddingBottom = "140px";
	document.getElementById("game").style.height = "300px";


	window.setInterval("reload()", 1000);

};

};
function reload(){
	guessed = false;
	randomIndex = Math.floor(Math.random()*images.length);
	document.getElementById("game").innerHTML="";
	document.getElementById("game").appendChild(images[randomIndex]);
	document.getElementById("game").className = "game";
	
}

function ProcessKeyPress(e){

	if (e.keyCode == 37){
		if (guessed==false){
			if (isBanana()){
				score++;
			}
			else{
				score--;
			}
		}
		guessed = true;
	} //left

	else if (e.keyCode == 39){//right
		if (guessed==false){
			if (isBanana()==false){
				score++;
			}
			else{
				score--;
			}
		}
		guessed = true;
	}

	var content = document.createTextNode("Score: " + score);
	document.getElementById("score").innerHTML="";
	document.getElementById("score").appendChild(content);

}

;

function isBanana(){

	var name = images[randomIndex].src;

	var index = name.lastIndexOf("/")+1;

	name = name.substring(index);


	if (name.indexOf("banana")>-1){
	var content = document.createTextNode("YES BANANA");

	document.getElementById("game").appendChild(content);
		return false;
	}
	var content = document.createTextNode("NO BANANA");

	document.getElementById("game").appendChild(content);
	return true;
}



