//Return Last Index
//Create a function that returns the last value of the last item in an array or string.
//
//Examples
//lastItem([0, 4, 19, 34, 50, -9, 2]) ➞ 2
//
//lastItem("The quick brown fox jumped over the lazy dog") ➞ "g"
//
//lastItem([]) ➞ undefined

const lastItem = (arr) => arr[arr.length - 1];

console.log(lastItem([0, 4, 19, 34, 50, -9, 2]));
console.log(lastItem("The quick brown fox jumped over the lazy dog"));
console.log(lastItem([]));
