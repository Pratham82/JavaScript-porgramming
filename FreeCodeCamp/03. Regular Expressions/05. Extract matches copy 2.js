// Regular Expressions: Extract Matches

/*
You can also extract the actual matches you found with the .match() method.

To use the .match() method, apply the method on a string and pass in the regex
inside the parentheses.

"Hello, World!".match(/Hello/);
/// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
/// Returns ["expressions"]

.match syntax is the "opposite" of the .test method
*/

// Apply the .match() method to extract the word coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex) ; // Change this line

console.log( extractStr.match(codingRegex));

// Output: ["coding", index: 18, input: "Extract the word 'coding' from this string.", groups: undefined]

