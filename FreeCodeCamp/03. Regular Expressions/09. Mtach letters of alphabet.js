// Regular Expressions: Match Letters of the Alphabet

/*
Inside a character set, you can define a range of characters to match using a hyphen character: -.

Example:
let catStr = "cat";
let batStr = "bat";
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
*/

//Match all the letters in the string quoteSample.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

console.log(result);