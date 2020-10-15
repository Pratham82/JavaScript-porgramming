//Product of Digits of Sum
//Create a function that takes numbers as arguments, adds them together, and returns the product of digits until the answer is only 1 digit long.

const sumDigProd = (...nums) => {
  let n = nums.reduce((prev, curr) => prev + curr, 0);
  while (n > 9) {
    n = [...("" + n)].reduce((a, v) => a * +v, 1);
  }
  return n;
};

console.log(sumDigProd(1, 2, 3, 4, 5, 6));
