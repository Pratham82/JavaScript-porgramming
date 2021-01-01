// Find the Unique Letters
// Create a function that takes a string and returns the letters that occur only once.

// Examples
// findLetters("monopoly") ➞ ["m", "n", "p", "l", "y"]

function findLetters(str) {
	return str
		.split("")
		.filter((val) => str.indexOf(val) == str.lastIndexOf(val));
}

console.log(findLetters("monopoly"));
