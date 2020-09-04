// First and Last Index
// Given a word, write a function that returns the first index and the last index of a character.

// Examples
// charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

const charIndex = (word, char) => {
	return word.indexOf(char) > -1 && word.lastIndexOf(char) > -1
		? [word.indexOf(char), word.lastIndexOf(char)]
		: undefined;
};

console.log(charIndex("circumlocution", "c"));
console.log(charIndex("happy", "e"));
