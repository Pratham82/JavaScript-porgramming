/**
 ** Call, apply, bind
 */

var myPhone = {
  name: 'OnePlus 5',
  batteryPercentage: 50,
  OS_version: 1.0,
  chargePhone: function () {
    this.batteryPercentage = 100
  },
  upgradeOS: function () {
    this.OS_version += 1.0
  },
}

const iphone = {
  name: 'i-Phone 12',
  batteryPercentage: 10,
}

const newPhone = {
  name: 'Samsung s12',
  batteryPercentage: 20,
}

//* Apply
/*
Calling/using the function from other object

The apply() method calls a function with a given this value,
 and arguments provided as an array 
*/
myPhone.chargePhone.apply(iphone)
console.log(iphone)

//* Bind
/* The bind() method creates a new function that, when called, has its this keyword 
set to the provided value, with a given sequence of arguments preceding any 
provided when the new function is called. */
chargeNewPhone = myPhone.chargePhone.bind(newPhone)
chargeNewPhone()
console.log(newPhone)

//* Call
/*
The call() method calls a function with a given this value and arguments provided 
individually.
The main differences between bind() and call() is that the call() method:
*/
myPhone.upgradeOS()
console.log(myPhone)

const me = {
  firstName: 'Prathamesh',
  lastName: 'Mali',
  printName: function () {
    // return `Hi ${this.firstName} ${this.lastName}!!`
    console.log(`Hi ${this.firstName} ${this.lastName}!!`)
  },
}

me.printName()

const john = {
  firstName: 'John',
  lastName: 'Doe',
}

// Function borrowing
me.printName.call(john)

// moving the function out
const greetings = function (destination) {
  console.log(
    `Hi ${this.firstName} ${this.lastName}, welcome to ${destination}!!`
  )
}

greetings.call(me, 'NY')
greetings.call(john, 'LA')

// Apply
//* In apply method we have to pass the arguments in an array, if we don't pass an array then we'll get an error
greetings.apply(john, ['SD'])

//Bind
const greetingsCopy = greetings.bind(me)
greetingsCopy('Mumbai')
//** Call, apply, bind polyfills

// bind
const obj = {
  name: 'Joe',
}

let myFunc = function (designation, location, id) {
  console.log(
    `My name is ${this.name} | Designation: ${designation} | from: ${location} | ID: ${id}👋`
  )
}

// Native bind
let myFuncCopy = myFunc.bind(obj, 'SWE', 'Mumbai')
myFuncCopy('2UHN432')

Function.prototype.myBind = function (obj, ...myBindArgs) {
  // funcRef is the reference to the function
  let funcRef = this

  // The obj will be passed in as a param
  // functionArgs: are the arguments which are passed as parameter of the function that we are binding to
  // myBindArgs: arguments which are added in the myBind method
  return function (...functionArgs) {
    // Whenever we call this function it will invoke the funcRef with the current object
    funcRef.apply(obj, [...myBindArgs, ...functionArgs])
  }
}

// // bind polyfill
const myFuncCopy2 = myFunc.myBind(obj, 'SDE', 'Mumbai')
myFuncCopy2('23FF3ED')

//** Other solution */
// let obj = {
//   name: 'Jack',
// }

// let myFunc = function (id, city) {
//   console.log(`${this.name}, ${id}, ${city}`) // id will be undefined
// }

// // Accepting any number of arguments passed to myBind
// Function.prototype.myBind = function (obj, ...args) {
//   let func = this
//   // Accepting arguments passed to newFunc
//   return function (...newArgs) {
//     func.apply(obj, [...args, ...newArgs])
//   }
// }

// Shorter method
// Function.prototype.myBind = function (obj, ...args) {
//   return (...newArgs) => this.apply(obj, [...args, ...newArgs]);
// };

// let newFunc = myFunc.myBind(obj, 'a_random_id')
// newFunc('New York') // Jack, a_random_id, New York

// function createFunc() {
//   const name = ['a', 'b', 'c']
//   const nameFunc = []
//   for (var i = 0; i < name.length; i++) {
//     nameFunc.push(function () {
//       console.log(name[i])
//     })
//   }
//   console.log(nameFunc)
//   return nameFunc
// }
// const confi = createFunc()
// confi[0]()
