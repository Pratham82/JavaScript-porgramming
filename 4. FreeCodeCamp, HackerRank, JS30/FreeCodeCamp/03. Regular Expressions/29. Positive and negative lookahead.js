//Regular Expressions: Positive and Negative Lookahead
/*
Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along.
It is useful when you wan to find multiple pattern further along.

* A positive lookahead will look to make sure the element in the search pattern 
  is there, but won't actually match it.
* A positive lookahead is used as (?=...) where the ... is the required part 
  that is not matched.
* a negative lookahead will look to make sure the element in the search pattern 
  is not there.
* A negative lookahead is used as (?!...) where the ... is the pattern that you 
  do not want to be there.
* The rest of the pattern is returned if the negative lookahead part is not present.
 
*/

/* Use lookaheads in the pwRegex to match passwords that are greater than 5 
characters long, do not begin with numbers, and have two consecutive digits.
*/


let sampleWord = "astronaut";
//let pwRegex = /(?=\w{5+})(?=\d{2+})^\d/; // Change this line  
let pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

console.log(result);