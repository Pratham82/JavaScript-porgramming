//Find the nth Tetrahedral Number
//Create a function that takes an integer n and returns the nth tetrahedral number.

const tetra = (n) => (n * (n + 1) * (n + 2)) / 6;

console.log(tetra(2));
