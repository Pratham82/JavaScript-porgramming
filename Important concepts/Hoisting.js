console.log(x) // undefined
getName() // prints return, because function is stored in the memory even before the execution
// getNameArrow() // gives error because the arrow function acts as a variable

var x = 100

function getName() {
  console.log('My name is joe')
}

const getNameArrow = () => console.log('My name is joe')

//  scopes
// {
//   var a = 100
//   let b = 200
//   let c = 300
// }

// console.log(a)
// console.log(b)
// console.log(c)

{
  console.log({ b })
  // console.log({ a }) // returns error
  const a = 1000
  var b = 1000
}

const obj1 = {
  message: 'Hello',
  a: function logMessage() {
    console.log(this.message)
  },
}

// setTimeout(obj1.a, 1000)

let z = 100
z = 101 // re-initializing is allowed
// let z = 101 // re-declaration/ assignment is not allowed (throws error)
console.log(z)

// const z2 = 100
// z2 = 101 // re-initializing is not allowed (throws error)
// let z2 = 101 // re-declaration is not allowed (throws error)
// console.log(z2)
