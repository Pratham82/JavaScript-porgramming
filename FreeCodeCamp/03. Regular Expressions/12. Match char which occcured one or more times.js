// Regular Expressions: Match Characters that Occur One or More Times

/*
Sometimes, you need to match a character (or group of characters) that appears 
one or more times in a row. 
* This means it occurs at least once, and may be repeated.
* You can use the + character to check if that is the case. 
* The character or pattern has to be present consecutively. 
* the character has to repeat one after the other.

Example
/a+/g would find one match in "abc" and return ["a"].
Because of the +, it would also find a single match in "aabc" and return ["aa"].
*/

/* You want to find matches when the letter s occurs one or more times in "Mississippi". 
Write a regex that uses the + sign.*/

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

console.log(result);