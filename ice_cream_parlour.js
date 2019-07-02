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

var scoop_number = 1;
var scoop_1 = document.querySelector(".scoop_one");
var scoop_2 = document.querySelector(".scoop_two");
var scoop_3 = document.querySelector(".scoop_three");

control_panel_options.addEventListener("click", function(event) {
	if(scoop_number <= 3) {
		if(event.target.className === "button") {
			var picked = event.target;
			if(scoop_number===1) {
				scoop_1.style.display = "inline";
				scoop_1.nextElementSibling.style.display = "inline";
				scoop_1.classList.add(picked.textContent);
			} else if(scoop_number===2) {
				scoop_2.style.display = "inline";
				scoop_2.nextElementSibling.style.display = "inline";
				scoop_2.classList.add(picked.textContent);
			} else {
				scoop_3.style.display = "inline";
				scoop_3.nextElementSibling.style.display = "inline";
				scoop_3.classList.add(picked.textContent);
			}
			scoop_number++;
		}
	}
	
});