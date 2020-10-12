/*
War of Numbers
There's a great war between the even and odd numbers. Many numbers already lost their life in this war and it's your task to end this. You have to determine which group is larger: the even, or the odd. The larger group wins.

Create a function that takes an array of integers, sums the even and odd numbers seperately, then returns the larger of the sums minus the smaller. 
*/

const warOfNumbers = (arr) =>
  Math.abs(
    arr.filter((n) => n % 2 == 0).reduce((prev, curr, i) => prev + curr, 0) -
      arr.filter((n) => n % 2 != 0).reduce((prev, curr, i) => prev + curr, 0)
  );

console.log(warOfNumbers([2, 8, 7, 5]));
