// Regular Expressions: Reuse Patterns Using Capture Groups

/*
You can search for repeat substrings using capture groups. Parentheses, ( and ), 
are used to find repeat substrings.  
You put the regex of the pattern that will repeat in between the parentheses.
*/

// Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.


let repeatNum = "10 10 10";
let reRegex = /(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);

console.log(result);