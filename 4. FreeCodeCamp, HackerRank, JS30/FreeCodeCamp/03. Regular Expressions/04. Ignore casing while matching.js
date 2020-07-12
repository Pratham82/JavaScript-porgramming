// Regular Expressions: Ignore Case While Matching

/* Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters.
You can match both cases using what is called a flag.flag that ignores case - the i flag.
An example of using this flag is /ignorecase/i. This regex can match the strings "ignorecase", "igNoreCase", and "IgnoreCase".
*/


/* Write a regex fccRegex to match "freeCodeCamp", no matter its case. Your regex
should not match any abbreviations or variations with spaces.*/


// 'i' flag will ignore the cases i.e uppercase or lowercase and returns true if the pattern is same

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);

console.log(result);