/*
Primitive values:

These are the most basic values one can think of, which includes, undefined, null, boolean, string, and numbers. Primitive values are passed by value in javascript

Whereas all objects (including functions) are passed by reference in javascript.
*/

/*
Javascript pass by reference:
In Pass by Reference, a function is called by directly passing the reference/address of the variable as the argument. Changing the argument inside the function affects the variable passed from outside the function. In Javascript objects and arrays are passed by reference.
*/

//javascript pass by reference
function callByReference(varObj) {
  console.log('Inside Call by Reference Method')

  varObj.a = 100

  console.log(varObj)
}

let myObj = {
  a: 1,
}

console.log('Before Call by Reference Method')

console.log({ myObj }) // { myObj: { a: 1 } }

callByReference(myObj)

console.log('After Call by Reference Method')

console.log({ myObj }) // { myObj: { a: 100 } }

/*

In javascript pass by value, the function is called by directly passing the value of the variable as the argument. Therefore, even changing the argument inside the function doesn’t affect the variable passed from outside the function.

It is important to note that in javascript, all function arguments are always passed by value. That is, JavaScript copies the values of the passing variables into arguments inside of the function.
*/

//javascript pass by value
function square(x) {
  x = x * x

  return x
}

var y = 10

var result = square(y)

console.log(y) // 10 -- no change
console.log(result) // 100

//
const arr = [1, 2, 3, 4]

const updateArr = (arr, newValue) => arr.push(newValue) // Will mutate original array
const updateArrWithoutMut = (arr, newValue) => [...arr].push(newValue) // Will not mutate original array

console.log({ arr })

// updateArr(arr, 10)
updateArrWithoutMut(arr, 10)

console.log({ arr })
