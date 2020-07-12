// Functional Programming: Split a String into an Array Using the split Method

/*
1. The split method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression.
*/

/*
Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.
*/

function splitify(str) {
	// Only change code below this line
	var splittedStr = str.split(/\W/);
	return splittedStr;
	// Only change code above this line
}
splitify("Hello World,I-am code");

console.log(splitify("Hello World,I-am code"));
