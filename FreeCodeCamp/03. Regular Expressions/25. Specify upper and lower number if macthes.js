// Regular Expressions: Specify Upper and Lower Number of Matches

/*
You can specify the lower and upper number of patterns with quantity specifiers.
Example:
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
*/

// Change the regex ohRegex to match the entire phrase "Oh no" only when it has 3 to 6 letter h's.

//let ohStr = "Ohhh no";
let ohStr = "Ohhh no"
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);

console.log(result);