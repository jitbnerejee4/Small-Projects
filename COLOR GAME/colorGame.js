var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}


function setupModeButtons(){
	//mode buttons event listeners
	for(var i= 0; i< modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "EASY") {
				numSquares = 3;
			} 
			else{
				numSquares = 6;
			}
			reset();
		})
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener("click", function() {
		//grab the color of the clicked square and compare with picked color
			if (this.style.backgroundColor === pickedColor) {
				messageDisplay.textContent = "Correct!"
				changeColors(pickedColor);
				h1.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play Again?"
			}
			else {
				this.classList.add("fade");
				messageDisplay.textContent = "Try Again";
			}
		})

	}
}

function reset(){
	messageDisplay.textContent = "";
	//generate all new color
	colors = generateRandomColors(numSquares);
	//pick a random color from the array
	 pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "new colors";
	//change color of squares
	for (var i = 0; i < squares.length; i++) {
		//add initial colors to squares
		squares[i].classList.remove("fade");
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function(){
	reset();
})


function changeColors(color) {
	//loop through all squares 
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].classList.remove("fade");
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//repeat num times
	for(var i=0; i< num; i++) {
		arr.push(randomColor());
	}

	return arr; 
}

function randomColor() {
	//generate Red
	var red = Math.floor(Math.random() * 256);
	//generate Green
	var green = Math.floor(Math.random() * 256);
	//generate Blue
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue +")";
}