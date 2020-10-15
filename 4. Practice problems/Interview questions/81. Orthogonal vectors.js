//Orthogonal Vector
//Create a function that takes two vectors as arrays and checks if the two vectors are orthogonal or not. The return value is boolean. Two vectors a and b are orthogonal if their dot product is equal to zero.

const isOrthogonal = (arr1, arr2) =>
  arr1.map((v, i) => v * arr2[i]).reduce((prev, curr) => prev + curr) === 0;

console.log(isOrthogonal([1, 2], [2, -1]));
console.log(isOrthogonal([1, 2, 0], [2, -1, 10]));
console.log(isOrthogonal([3, -1], [7, 5]));
