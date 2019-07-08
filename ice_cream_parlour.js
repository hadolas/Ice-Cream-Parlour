// Give sprinkles random colours
var colours = ["#e0768d", "#f4c046", "#edf254", "#b5f254", "#54f2c5", "#54d5f2", "#9086ef","#e49ef7", "#ea62e1", "#62d3ea"];
var randomNum;
var part = 1;

// Right Panel content
var info_box = document.querySelector(".info_box");
var control_panel_options = document.querySelector(".control_panel .options");
var continue_button = document.querySelector(".continue");

// Available Flavours/Options
var scoop_flavours = ["vanilla", "mint", "chocolate", "bubblegum", "strawberry", "lemon"];
var scoop_flavours_length = scoop_flavours.length;
var sauce_flavours = ["chocolate", "strawberry", "raspberry", "fudge"];
var sauce_flavours_length = sauce_flavours.length;
var sprinkles_options = ["Yes", "No"];
var sprinkles_options_length = sprinkles_options.length;

// Activate 'Continue' Button
function activate_continue_button() {
	continue_button.style.background = "#ff0000";
	continue_button.style.cursor = "pointer";
}

// Deactivate 'Continue' Button
function deactivate_continue_button() {
	continue_button.style.background = "#a9a9a9";
	continue_button.style.cursor = "not-allowed";
}

select_part();

var scoop_number = 1;
var sauce_complete = false;
var sprinkles_complete = false;
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
				activate_continue_button();
			} else if(scoop_number===2) {
				scoop_2.style.display = "inline";
				scoop_2.nextElementSibling.style.display = "inline";
				scoop_2.classList.add(picked_scoop.textContent);
			} else {
				scoop_3.style.display = "inline";
				scoop_3.nextElementSibling.style.display = "inline";
				scoop_3.classList.add(picked_scoop.textContent);	
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
			sauce_complete = true;
			activate_continue_button();
			
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
			sprinkles_complete = true;
			activate_continue_button();
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
	deactivate_continue_button()
	select_part();
}

// If 'Continue' is clicked, continue to the next part if rules are met
continue_button.addEventListener("click", function() {
	if((part===1&&scoop_number<2) || (part===2&&sauce_complete===false) || (part===3&&sprinkles_complete===false)) {
		return;
	} else if(continue_button.textContent==="Yes please!") {
		reset();
		select_part();
	} else{
		clear_control_panel_options();
	}
});


// PART SELECTION
function select_part() {
	if(part===1) {
		// if part===1, choose scoops
		info_box.textContent = "Hi there! Which scoops of ice cream would you like? (Choose up to 3!)";
		continue_button.textContent = "Continue →";
		for(var i=0; i<scoop_flavours_length; i++) {
			var scoop_option = document.createElement("div");
			scoop_option.classList.add("button");
			scoop_option.textContent = scoop_flavours[i];
			control_panel_options.appendChild(scoop_option);
		}
	} else if(part===2) {
		// if part===2, choose sauce
		info_box.textContent = "Choose a sauce!";
		for(var i=0; i<sauce_flavours_length; i++) {
			var sauce_option = document.createElement("div");
			sauce_option.classList.add("button");
			sauce_option.textContent = sauce_flavours[i];
			control_panel_options.appendChild(sauce_option);
		}
	} else if(part===3) {
		// if part===3, want sprinkles?
		info_box.textContent = "Top with sprinkles?";
		for(var i=0; i<sprinkles_options_length; i++) {
			var sprinkles_option = document.createElement("div");
			sprinkles_option.classList.add("button");
			sprinkles_option.textContent = sprinkles_options[i];
			control_panel_options.appendChild(sprinkles_option);
		}
	} else if(part===4) {
		// if part===4, want to restart?
		info_box.textContent = "Yummy! Would you like another ice cream?";
		continue_button.textContent = "Yes please!";
		activate_continue_button();
	}
}

// ==============================

// Set/Resize .container and .background
function resize() {
	var container = document.querySelector(".container");
	var screenHeight = window.innerHeight;
	var container_top_position = container.getBoundingClientRect().top;

	var right_panel = document.querySelector(".right_panel");
	var background = document.querySelector(".background");

	var container_height = right_panel.clientHeight + 20;
	var scrollHeight = document.documentElement.scrollHeight;
	
	background.style.height = scrollHeight + "px";
	container.style.height = right_panel.clientHeight + 10 + "px";
}

resize();
window.addEventListener("resize", function() {
	resize()
})

// Reset variables
function reset() {
	part=1;
	scoop_number = 1;
	sauce_complete = false;	
	sprinkles_complete = false;
	scoop_1.style.display = "none";
	scoop_1.nextElementSibling.style.display = "none";
	scoop_2.style.display = "none";
	scoop_2.nextElementSibling.style.display = "none";
	scoop_3.style.display = "none";
	scoop_3.nextElementSibling.style.display = "none";
	sauce.style.display = "none";
	sauce.style.transform = "translateY(0px)";
	var sprinkles_group = document.querySelector(".sprinkles");
	sprinkles_group.style.display = "none"
	sprinkles_group.style.transform = "translateY(0px)";
	scoop_1.classList = "scoop scoop_one top";
	scoop_2.classList = "scoop scoop_two top";
	scoop_3.classList = "scoop scoop_three top";
	sauce.classList = "sauce";
	continue_button.style.cursor = "not-allowed";
	continue_button.style.background = "#a9a9a9";
}