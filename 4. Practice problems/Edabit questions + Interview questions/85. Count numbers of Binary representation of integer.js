//Count Ones in Binary Representation of Integer
//Count the amount of ones in the binary representation of an integer. So for example, since 12 is '1100' in binary, the return value should be 2.

const countOnes = (n) =>
  n
    .toString(2)
    .split("")
    .filter((n) => n !== "0")
    .join("").length;

console.log(countOnes(0));
console.log(countOnes(12));
console.log(countOnes(100));
