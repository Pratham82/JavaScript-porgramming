// Regex Series: 5-Digit Zip Code
// Write a regular expression that matches a string if and only if it is a valid zip code.

// Examples
// "32554" ➞ true

// "92 342" ➞ false
//  Invalid: contains a whitespace
// Zipcodes must be 5 digits long exactly and only contain numbers.
// Not allowed: non-numeric characters or whitespaces.
// This challenge is designed to use Regex only.

let x = /^[0-9]{5}$/;

console.log(x.test("12%45"));
