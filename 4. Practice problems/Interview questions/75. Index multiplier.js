//Index Multiplier
//Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

const indexMultiplier = (arr) =>
  arr.map((val, i, arr) => val * i).reduce((prev, curr) => prev + curr, 0);

console.log(indexMultiplier([1, 2, 3, 4, 5]));
