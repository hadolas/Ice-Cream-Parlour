// Give sprinkles random colours
var colours = ["#e0768d", "#f4c046", "#edf254", "#b5f254", "#54f2c5", "#54d5f2", "#9086ef","#e49ef7", "#ea62e1", "#62d3ea"];
var randomNum;

var sprinkles = document.querySelectorAll(".sprinkles path");
var sprinkles_length = sprinkles.length;

for(var i=0; i<sprinkles_length; i++) {
	randomNum = (Math.floor(Math.random()*10));
	sprinkles[i].style.stroke=colours[randomNum];
}