var button = document.getElementById("color-button");
var current = document.getElementById("current-color");
var getColor = document.getElementById("get-button");
var ColorBox = document.getElementsByTagName("BODY")[0];

button.addEventListener("click", function () {
	ColorBox.style.background = getRandomColor();
	current.innerText = getRandomColor();
});

getColor.addEventListener("click", function () {
	current.select();
	document.execCommand("copy");
});

function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
