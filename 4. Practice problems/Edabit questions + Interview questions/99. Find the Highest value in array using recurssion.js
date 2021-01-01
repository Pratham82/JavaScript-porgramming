/*Find the Highest Integer in the Array Using Recursion
Create a function that finds the highest integer in the array using recursion.
  */

const findHighest = arr => arr.sort((a, b) => a - b)[arr.length - 1]

//const newArr = arr.sort((a, b) => a - b)
//return newArr[newArr.length - 1]
/*
const findHighest = (arr) =>{

    if(arr.length === 0) return;
    let max = arr.shift();
    let el = findHighest(arr);
    if(el > max) max = el;
    return max;
}
  */

// Simple Recurssion example: Count down to 1 from the given number
const countDownto1 = num => {
  console.log(num)
  let nextNum = num - 1
  if (nextNum > 0) {
    countDownto1(nextNum)
  }
}

//countDownto1(45)
console.log(findHighest([-1, 3, 5, 6, 99, 12, 2]))
