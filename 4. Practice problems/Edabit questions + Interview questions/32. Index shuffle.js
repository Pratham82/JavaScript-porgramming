// Index Shuffle
// Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.

// To illustrate:

// indexShuffle("abcd") ➞ "acbd"
// "ac" (even-indexed) + "bd" (odd-indexed)

const indexShuffle = (str) =>
	str
		.split("")
		.filter((val, index) => index % 2 == 0)
		.join("") +
	str
		.split("")
		.filter((val, index) => index % 2 !== 0)
		.join("");

console.log(indexShuffle("abcd"));
console.log(indexShuffle("abcdefg"));
