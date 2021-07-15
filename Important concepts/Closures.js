// Function along with its lexical scope is called closure
// Closure is a function which is bind together wih its lexical environment
//Or closure along with its lexical scope forms a closure

// function z() {
//   var b = 200
//   function x() {
//     var a = 400
//     function y() {
//       console.log(`a: ${a} b: ${b}`)
//     }
//     var a = 600
//     return y()
//   }
//   b = 4100
//   return x
// }

// let val = z()
// val() // a: 600 b: 4100
//let value = x()
//value()

// New example
// i 1
// function outer() {
//   var outer_value = 10
//   function inner() {
//     console.log(outer_value)
//   }
//   inner()
// }

// Calling i1

// const function_holder = outer
// function_holder()

// // i 3
// function outer() {
//   var outer_value = 10
//   return function inner() {
//     outer_value = 988
//     console.log(outer_value)
//   }
// }

// const function_holder = outer()
// function_holder() //98

// i 2
function outer() {
  var outer_value = 10
  function inner() {
    console.log(outer_value)
  }
  outer_value = 888
  return inner
}

const function_holder = outer()
// The value of function_holder() will be 888 because the
// inner function logs the value "outer_value"; but not literally the first value
// but the "outer_value" in inner function is actually pointing to the reference of value "outer_value"
// So it will refer to the latest value which is given just before returning the function
function_holder() // 888
