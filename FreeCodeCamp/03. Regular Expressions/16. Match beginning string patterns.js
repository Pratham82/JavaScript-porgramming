// Regular Expressions: Match Beginning String Patterns

/* Outside of a character set, the caret is used to search for patterns at the 
beginning of strings.
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
/// Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
/// Returns false
*/


// Use the caret character in a regex to find "Cal" only in the beginning of the string rickyAndCal.

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
