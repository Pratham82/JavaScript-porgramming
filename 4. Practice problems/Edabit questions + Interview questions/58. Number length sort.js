//Number Length Sort
//Create a sorting function which sorts numbers not by numerical order, but by number length! This means sorting numbers with the least amount of digits first, up to the numbers with the most digits.
//
//Examples
//numberLengthSort([1, 54, 1, 2, 463, 2]) ➞ [1, 1, 2, 2, 54, 463]
//
//numberLengthSort([999, 421, 22, 990, 32]) ➞ [22, 32, 999, 421, 990]
//
//numberLengthSort([9, 8, 7, 6, 5, 4, 31, 2, 1, 3]) ➞ [9, 8, 7, 6, 5, 4, 2, 1, 3, 31

const numberLengthSort = (arr) =>
  arr
    .map((val) => val.toString())
    .sort((a, b) => a.length - b.length)
    .map((val) => Number(val));

console.log(numberLengthSort([999, 421, 22, 990, 32]));
console.log(numberLengthSort([9, 8, 7, 6, 5, 4, 31, 2, 1, 3]));
