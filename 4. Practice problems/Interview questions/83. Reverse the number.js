//Reverse the Number
//Create a function that takes an integer n and reverses it.

//Using strings
const rev = (n) => Number(Math.abs(n).toString().split("").reverse().join(""));

const rev2 = (n) => {
  let res = 0,
    dig;

  while (n) {
    dig = n % 10;
    res = res * 10 + dig;
    n = (n / 10) | 0;
  }
  return res;
};

console.log(rev(5121));
console.log(rev2(5121));
