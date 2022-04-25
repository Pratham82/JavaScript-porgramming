// const makeFunc = () => {
//   let name = 'Prathamesh'
//   ;(() => console.log(name))()
// }

// makeFunc()

/**
 A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
 In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
 */

function makeFunc() {
  var name = 'Prathamesh'
  function displayName() {
    console.log(name)
  }
  return displayName
}

var myFunc = makeFunc()
myFunc() // This will log Prathamesh
/* We can access the variable which is in the lexical scope. so in this example
  function displayName is a closure which has access of its surrounding state(lexical env)
 */

//* Closure scope chain
/**
 Every closure has three scopes:

Local Scope (Own scope)
Outer Functions Scope
Global Scope
   */

//* Q.1 Guess the op
let count = 0
  ; (function printCount() {
    if (count == 0) {
      let count = 1 // shadowing
      console.log(count) // 1
    }
    console.log(count) // 0, because the count is already declared in the global scope
  })()

//* Q.2 Write a function that would allow you to do this

// create a closure, to persist the value even after the inner function is returned
// If we don't want the value to change then we are creating a closure where, the value is always 6
function createBase(base) {
  return function(num) {
    return num + base
  }
}

var addSix = createBase(6)

console.log(addSix(10))
console.log(addSix(20))

//* Time optimization
function find() { }
