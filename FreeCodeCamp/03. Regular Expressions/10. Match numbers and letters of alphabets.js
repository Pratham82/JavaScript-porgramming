// Regular Expressions: Match Numbers and Letters of the Alphabet

/*
We can also use hyphen for matching the range of numbers
Example:

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
/// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);
*/

/*
Create a single regex that matches a range of letters between h and s, and a range 
of numbers between 2 and 6. Remember to include the appropriate flags in the regex.
*/

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line

console.log(result);
