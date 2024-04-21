/*
console.log(typeof undefined) // "undefined"
console.log(typeof null) // "object"
console.log(typeof true) // "boolean"
console.log(typeof 42) // "number"
console.log(typeof 'Hello') // "string"
console.log(typeof Symbol('foo')) // "symbol"
console.log(typeof function () {}) // "function"
console.log(typeof {}) // "object"
console.log(typeof []) // "object"
console.log(typeof new Date()) // "object"
console.log(typeof /regex/) // "object"
console.log(typeof new Map()) // "object"
console.log(typeof new Set()) // "object"
*/

function foo() {
  // 'use strict'
  // prettier-ignore
  let a = b = 0
  a++
}

foo()

// without strict
console.log(typeof a) // undefined
console.log(typeof b) // number

// with strict
console.log(typeof a) // undefined
console.log(typeof b) // ReferenceError: b is not defined

// soln: https://chat.openai.com/share/73c06aec-d9e4-40fc-b653-414dc3348e67

for (var i = 0; i < 4; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}

for (let i = 0; i < 4; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}
