var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")


console.log(css);
console.log(color1);
console.log(color2);
console.log(body);

function change_bg(color1,color2){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1 
	+ "," 
	+ color2
	+ ")";

	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", function(){
	console.log("color1 value is: " + color1.value);
	change_bg(color1.value,color2.value);
})

color2.addEventListener("input", function(){
	console.log("color2 value is: " + color2.value);
	change_bg(color1.value,color2.value);
})