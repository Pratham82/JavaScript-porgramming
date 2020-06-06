// Regular Expressions: Match Literal Strings

// Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.


/* 
Here any other form of 'Waldo' will not work for eg. 'waldo' 'WALDO' we will get true only
if the pattern appears exactly similar to the regex.
*/
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
