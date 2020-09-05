// Is the Number a Repdigit
// A repdigit is a positive number composed out of the same digit.

// Create a function that takes an integer and returns whether it's a repdigit or not.

// Examples
// isRepdigit(66) ➞ true

// isRepdigit(0) ➞ true

// isRepdigit(-11) ➞ false
// Notes
// The number 0 should return true (even though it's not a positive number).
// Check the Resources tab for more info on repdigits.

const isRepdigit = (num) =>
	num > 0
		? num
				.toString()
				.split("")
				.every((val) => val == num % 10)
		: "The number must be >= 0";

console.log(isRepdigit(6666));
console.log(isRepdigit(1001));
