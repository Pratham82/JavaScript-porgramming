// Regular Expressions: Using the Test Method
// Regular Expressions: Using the Test Method

/* Regular expressions are used in programming languages to match parts of strings. 
You create patterns to help you do that matching.

*/

//Apply the regex myRegex on the string myString using the .test() method.


/* Syntax:
 regex_string = /the pattern we trying to find/
 result_var = regex_string.test(string_to_checK)
 result_var will return true if pattern is present in the string
*/


let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

console.log(result)