// Values for game
let min = 1,
	max = 20,
	winingNum = getRandomNum(min, max),
	guessesLeft = 5;

// UI elements
const game = document.querySelector("#game"),
	minNum = document.querySelector(".min-num"),
	maxNum = document.querySelector(".max-num"),
	guessBtn = document.querySelector("#guess-btn"),
	guessInput = document.querySelector("#guess-input"),
	message = document.querySelector(".message");

// Assign min and max value
minNum.textContent = min;
maxNum.textContent = max;

// Replay function
// We are using mousedown here because click will reload for every time we clicked submit
game.addEventListener("mousedown", (e) => {
	if (e.target.className === "replay") {
		window.location.reload();
	}
});

// Listen for guess
guessBtn.addEventListener("click", () => {
	let guess = parseInt(guessInput.value);

	// input validation
	if (isNaN(guess) || guess < min || guess > max) {
		setMessage(`Please enter a number between ${min}  and ${max}.`, "red");
		// If the user not added the correct number guesses will not be reduced
		guessInput.select();
		guessesLeft = 3;
	}

	// Check if guess is correct
	if (guess === winingNum) {
		gameOver(
			true,
			`😄 Hurray ${winingNum} is correct you've won the game!!!`
		);
	} else {
		//Reduce the number of guesses if guess was wrong
		guessesLeft -= 1;
		if (guessesLeft === 0) {
			gameOver(
				false,
				`😢 You lost the game correct guess was ${winingNum}.`
			);
		} else if (guess < winingNum) {
			setMessage(
				`Try going higher, you still have ${guessesLeft} guesses  left.`,
				"red"
			);
			// Clearing the input
			guessInput.value = "";
			// For setting the cursor to input field again coz im lazy 😄
			guessInput.select();
		} else if (guess > winingNum) {
			setMessage(
				`Try going lower you still have ${guessesLeft} guesses  left.`,
				"red"
			);
			guessInput.value = "";
			guessInput.select();
		}
	}
});

function gameOver(won, msg) {
	// Disable input after correct answer
	let color;
	won === true ? (color = "#3dd909") : (color = "red");
	guessInput.disabled = true;
	guessInput.style.border = `${color} 1px solid`;
	message.style.color = color;
	setMessage(msg);

	//Play again
	guessBtn.value = "Replay";
	guessBtn.className += "replay";
}

function setMessage(msg, color) {
	message.textContent = msg;
	message.style.color = color;
}

// Get random number
function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
