// Give sprinkles random colours
var colours = ["#e0768d", "#f4c046", "#edf254", "#b5f254", "#54f2c5", "#54d5f2", "#9086ef","#e49ef7", "#ea62e1", "#62d3ea"];
var randomNum;
var part = 1;

// Right Panel content
var info_box = document.querySelector(".info_box");
var control_panel_options = document.querySelector(".control_panel .options");
var continue_button = document.querySelector(".continue");

// Available Flavours
var scoop_flavours = ["vanilla", "mint", "chocolate", "bubblegum", "strawberry"];
var scoop_flavours_length = scoop_flavours.length;
var sauce_flavours = ["chocolate", "strawberry", "raspberry", "fudge"];
var sauce_flavours_length = sauce_flavours.length;
var sprinkles_options = ["Yes", "No"];
var sprinkles_options_length = sprinkles_options.length;

select_part();

var scoop_number = 1;
var scoop_1 = document.querySelector(".scoop_one");
var scoop_2 = document.querySelector(".scoop_two");
var scoop_3 = document.querySelector(".scoop_three");
var sauce = document.querySelector(".sauce");

control_panel_options.addEventListener("click", function(event) {
	if(event.target.className === "button") {
		if(part===1 && scoop_number <= 3) {
			var picked_scoop = event.target;
			if(scoop_number===1) {
				scoop_1.style.display = "inline";
				scoop_1.nextElementSibling.style.display = "inline";
				scoop_1.classList.add(picked_scoop.textContent);
			} else if(scoop_number===2) {
				scoop_2.style.display = "inline";
				scoop_2.nextElementSibling.style.display = "inline";
				scoop_2.classList.add(picked_scoop.textContent);
			} else {
				scoop_3.style.display = "inline";
				scoop_3.nextElementSibling.style.display = "inline";
				scoop_3.classList.add(picked_scoop.textContent);
				clear_control_panel_options();
			}
			scoop_number++
		} else if (part===2) {
			var picked_sauce = event.target;
			sauce.style.display = "inline";
			sauce.classList.add(picked_sauce.textContent);
			if(scoop_number===2){
				sauce.style.transform = "translateY(35px)";
			} else if (scoop_number===3) {
				sauce.style.transform = "translateY(17.5px)";
			}
			clear_control_panel_options();	
		} else if (part===3) {
			var picked_option = event.target;
			if(picked_option.textContent==="Yes") {
				var sprinkles = document.querySelectorAll(".sprinkles path");
				var sprinkles_length = sprinkles.length;
				var sprinkles_group = document.querySelector(".sprinkles");
				sprinkles_group.style.display = "inline"
				for(var i=0; i<sprinkles_length; i++) {
					randomNum = (Math.floor(Math.random()*10));
					sprinkles[i].style.stroke = colours[randomNum];
				}
				if(scoop_number===2){
					sprinkles_group.style.transform = "translateY(35px)";
				} else if (scoop_number===3) {
					sprinkles_group.style.transform = "translateY(17.5px)";
				}
			} else if (picked_option.textContent==="No") {
				console.log("No sprinkles :(")
			}
		}
	}
});

// Clear the control_panel_options when 'Next'/'Done' button is clicked
function clear_control_panel_options() {
	var control_panel_options_buttons = document.querySelectorAll(".control_panel .options .button");
	var control_panel_options_buttons_length = control_panel_options_buttons.length;
	for(var i=0; i<control_panel_options_buttons_length; i++) {
		control_panel_options_buttons[i].parentNode.removeChild(control_panel_options_buttons[i]);
	}
	part+=1;
	select_part();
}

continue_button.addEventListener("click", function() {
	if(scoop_number<2) {
		return;
	} else {
		clear_control_panel_options();
	}
});


// PART SELECTION
function select_part() {
	if(part===1) {
		info_box.textContent = "Hi there! Which scoops of ice cream would you like? (Choose up to 3!)";
		for(var i=0; i<scoop_flavours_length; i++) {
			var scoop_option = document.createElement("div");
			scoop_option.classList.add("button");
			scoop_option.textContent = scoop_flavours[i];
			control_panel_options.appendChild(scoop_option);
		}
	} else if(part===2) {
		info_box.textContent = "Choose a sauce!";
		for(var i=0; i<sauce_flavours_length; i++) {
			var sauce_option = document.createElement("div");
			sauce_option.classList.add("button");
			sauce_option.textContent = sauce_flavours[i];
			control_panel_options.appendChild(sauce_option);
		}
	} else if(part===3) {
		info_box.textContent = "Top with sprinkles?";
		for(var i=0; i<sprinkles_options_length; i++) {
			var sprinkles_option = document.createElement("div");
			sprinkles_option.classList.add("button");
			sprinkles_option.textContent = sprinkles_options[i];
			control_panel_options.appendChild(sprinkles_option);
		}
	}
}

// ==============================

// Set/Resize .container
function resize() {
	var container = document.querySelector(".container")
	var screenHeight = window.innerHeight;
	var container_top_position = container.getBoundingClientRect().top;
	container.style.height = screenHeight-(container_top_position+10)+"px";	
}

resize();
window.addEventListener("resize", function() {
	resize()
})