// Function along with its lexical scope is called closure
// Closure is a function which is bind together wih its lexical environment
//Or closure along with its lexical scope forms a closure

function z() {
  var b = 200
  function x() {
    var a = 400
    function y() {
      console.log(`a: ${a} b: ${b}`)
    }
    var a = 600
    return y()
  }
  b = 4100
  return x
}

let val = z()
val() // a: 600 b: 4100
//let value = x()
//value()
