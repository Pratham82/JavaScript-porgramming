// CAPS LOCK DAY is over!
// October 22nd is CAPS LOCK DAY. Apart from that day, every sentence should be lowercase, so write a function to normalize a sentence.

// Create a function that takes a string. If the string is all uppercase characters, convert it to lowercase and add an exclamation mark at the end.

// Examples
// normalize("CAPS LOCK DAY IS OVER") ➞ "Caps lock day is over!"

// normalize("Today is not caps lock day.") ➞ "Today is not caps lock day."

// normalize("Let us stay calm, no need to panic.") ➞ "Let us stay calm, no need to panic

const normalize = (str) =>
	str
		.split(" ")
		.map((val) => val == val.toUpperCase())
		.every((val) => val == true) === true
		? str
				.split(" ")
				.map((val) => val.toLowerCase())
				.join(" ")[0]
				.toUpperCase() +
		  str
				.split(" ")
				.map((val) => val.toLowerCase())
				.join(" ")
				.slice(1) +
		  "!"
		: str;

console.log(normalize("CAPS LOCK DAY IS OVER"));
console.log(normalize("Today is not caps lock day."));
