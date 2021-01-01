// Less Than 100 Array Remix
// Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.

// Examples
// arrayLessThan100([5, 57]) ➞ true

const arrayLessThan100 = (arr) => arr.reduce((acc, val) => acc + val, 0) < 100;

console.log(arrayLessThan100([77, 30]));
console.log(arrayLessThan100([0]));
