// Regular Expressions: Match Single Character with Multiple Possibilities

/*
You can search for a literal pattern with some flexibility with character classes

Character classes allow you to define a group of characters you wish to match by
placing them inside square ([ and ]) brackets.

For example, you want to match "bag", "big", and "bug" but not "bog"
You can create the regex /b[aiu]g/ to do this. The [aiu] is the 
character class that will only match the characters "a", "i", or "u".

Example
let bigStr = "big";
let bagStr = "bag";
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
*/

/* 
Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex 
to find all the vowels in the string quoteSample.
*/

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

console.log(result);