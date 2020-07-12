// Regular Expressions: Match Whitespace

/*
You can search for whitespace using \s, which is a lowercase s. 
This pattern not only matches whitespace, but also carriage return,
tab, form feed, and new line characters.
You can think of it as similar to the character class [ \r\t\f\n\v].

Example
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
/// Returns [" ", " "]
*/

// Change the regex countWhiteSpace to look for multiple whitespace characters in a string.


let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

console.log(result);
