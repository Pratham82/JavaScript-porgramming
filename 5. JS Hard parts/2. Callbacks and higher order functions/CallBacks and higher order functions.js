function copyArrayAndMultiplyBy2(array) {
  const output = []
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2)
  }
  return output
}

function copyArrayAndDivideBy2(array) {
  const output = []
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2)
  }
  return output
}

function copyArrayAndPlus3(array) {
  const output = []
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] + 3)
  }
  return output
}

// We can generalize a function- so we pass in out specific instruction only when we run copyArrayAndManipulate
// Bundling up the functionality and pass it in

/* How is this possible
  Functions in JS = first class objects
  They can co-exist with and can be treated like any other JS object

  1. Assigned to variables and properties of other objects
  2. Passed as arguments into functions
  3. Returned as values from functions
*/

/* 

Higher order functions:
-----------------------
  Takes in a function or passes a function

  Just a term to describe these function - any function that does it we call that - but there's nothing different about them inherently.

  why do we need this ?
  - Callbacks and higher order functions simplify our code and keep it DRY
  - Declarative and readable code: map, filter and reduce - the most readable way to write code to work with data.
  - Async JS: Callbacks are a core aspect of async JS and are under the hood of promises, async/await.
*/

// Higher order function
// function copyArrayAndManipulate(array, instructions) {
//   const output = []
//   for (let i = 0; i < array.length; i++) {
//     output.push(instructions(array[i]))
//   }
//   return output
// }

// callback function
// function multiplyBy2(num) {
//   return num * 2
// }

// Converting the above example to arrow functions

const copyArrayAndManipulate = (array, instructions) =>
  array.map(val => instructions(val))

const multiplyBy2 = num => num * 2

const myArray = [11, 22, 33]
// let result = copyArrayAndMultiplyBy2(myArray)
// result = copyArrayAndDivideBy2(myArray)
// result = copyArrayAndPlus3(myArray)
// result = copyArrayAndManipulate(myArray, multiplyBy2)

// Most shortest version :
result = copyArrayAndManipulate(myArray, input => input * 2)
console.log(result)
