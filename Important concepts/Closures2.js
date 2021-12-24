// Example 1
// ----------------------------------
// ** lexical scope **
// with lexical scope the inner variable defined outside a function can be accessible inside another function defined after the variable declaration
let fn
if (true) {
  // ** block scope **
  // anything declared here cannot be used outside the function, only with closure its accessible
  let i = 1
  fn = () => {
    // ** closure **
    // will have the outside function's variable accessible to it, with this we can access variables from the block scope outside the function
    console.log(i)
  }
}

console.log('logging fn')
fn() // 1
// console.log(i) // Returns error because the variable i is defined inside the block scope

// Example 2 closure with a function
// ----------------------------------
function a() {
  let n1 = 10
  let n2 = 111
  let n3 = 1192
  return () => {
    // only n1 will be included in the closure because we are only using n1 in the inner function
    console.dir(n1)
  }
}

console.dir(a()) // Closure: 10

// Example 3 closure with for loop
// ----------------------------------

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000)
}

// prints 0 1 2 after 1 second

// ---------------------------------
for (let i = 0; i < 3; i++) {
  const fn = () => {
    console.log(i)
  }
  fn()
}
// block scope: here let has block level scope, so after every iteration i's value will be changes to the new value according to the declaration

/// prints 0 1 2 as soon as the function is executed

// ---------------------------------
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000)
}

//function scope:  So here instead of creating a new variable, because var has function scope, it would just replace the value of i.

// prints 3 3 3 after 1 second, because we defined the variable using var and that will overrides the previous definition of i i.e 0 and 1
