// Give sprinkles random colours
var colours = ["#e0768d", "#f4c046", "#edf254", "#b5f254", "#54f2c5", "#54d5f2", "#9086ef","#e49ef7", "#ea62e1", "#62d3ea"];
var randomNum;

var sprinkles = document.querySelectorAll(".sprinkles path");
var sprinkles_length = sprinkles.length;

for(var i=0; i<sprinkles_length; i++) {
	randomNum = (Math.floor(Math.random()*10));
	sprinkles[i].style.stroke=colours[randomNum];
}

// Right Panel content
var info_box = document.querySelector(".info_box");
var control_panel_options = document.querySelector(".control_panel_options");

// Choose Scoops
info_box.textContent = "Welcome to <name>! Which scoops of ice cream would you like? Choose up to 3!";

var scoop_flavours = ["vanilla", "mint", "chocolate", "bubblegum", "strawberry"];
var scoop_flavours_length = scoop_flavours.length;

for(var i=0; i<scoop_flavours_length; i++) {
	var scoop_option = document.createElement("div");
	scoop_option.classList.add("button");
	scoop_option.textContent = scoop_flavours[i];
	control_panel_options.appendChild(scoop_option);
}

var scoop_one = document.querySelector(".scoop_one");
var options = document.addEventListener("click", function(event) {
	// console.log(event.target.className === "button");
	if(event.target.className === "button") {
		var picked = event.target
		// console.log(event.target.textContent);
		// console.log(event)
		// console.log(scoop_flavours.indexOf(event.target.textContent));
		console.log(picked);
		// picked.classList.add(event.target.textContent);
		// picked.classList.add("mint");
		scoop_one.classList.add(picked.textContent);
		console.log(event);
	}
});