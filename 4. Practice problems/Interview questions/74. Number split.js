//Number Split
//Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

const numberSplit = (n) => [Math.floor(n / 2), Math.ceil(n / 2)];

console.log(numberSplit(11));
console.log(numberSplit(10));
