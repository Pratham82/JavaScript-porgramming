//All Numbers in Array Are Prime
//Create a function thats takes an array of integers and returns true if every number is prime. Otherwise, return false.

//const allPrime = nums = nums.map()

const checkPrime = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    num % i === 0 && count++;
  }
  return count === 2;
};

const allPrime = (nums) => nums.map((n) => checkPrime(n)).every((val) => val);

console.log(allPrime([7, 5, 2, 4, 6]));
console.log(allPrime([2, 3, 5, 7, 13, 17, 19, 23, 29]));
