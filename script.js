var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2"); 
var css = document.querySelector("h3");
var body = document.getElementById("gradient");


function backgroundcolor(){
	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background; 
}
color1.addEventListener("input", backgroundcolor);
color2.addEventListener("input", backgroundcolor);

var number = prompt("enter a number from 1 to 10");

function boardgame(){
	 return number == 3 ? alert("correct") : alert("wrong you noob");

}

boardgame();	