// Regular Expressions: Match All Letters and Numbers

/*
* The closest character class in JavaScript to match the alphabet is \w. 
* This shortcut is equal to [A-Za-z0-9_].
* This character class matches upper and lowercase letters plus numbers. 
* this character class also includes the underscore character (_).
Example:
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true
*/

// Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

console.log(result);