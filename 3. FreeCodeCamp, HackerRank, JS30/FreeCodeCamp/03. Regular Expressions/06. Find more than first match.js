// Regular Expressions: Find More Than the First Match

// To search or extract a pattern more than once, you can use the g flag.
// You can have multiple flags on your regex like /search/gi

// Using the regex starRegex, find and extract both "Twinkle" words from the string twinkleStar.

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

console.log(result);

let result2 = starRegex.test(twinkleStar); // Change this line
console.log(result2);