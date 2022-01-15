//* 1. Try converting these codes to ES6 syntax-

// var aloo = 1
// if (aloo == 1) {
//   var a = 2
//   console.log(a)
// }
const aloo = 1
let a = 0
aloo == 1 ? (a = 2) : 0
console.log(a)
console.log(aloo)

// var multiply = function(x, y) {
//   return x * y;
// };

const multiplyFN = (x, y) => x * y
console.log(multiplyFN(10, 2))

// var customer = {
//   name: "Bhaalo"
// };
// var card = {
//   amount: 20,
//   product: "Aaalo",
//   unitprice: 50
// };
// var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece"

const customer = {
  name: 'Bhaalo',
}
const card = {
  amount: 20,
  product: 'Aaalo',
  unitprice: 50,
}
const { name } = customer
const { amount, product, unitprice } = card
const message = `Hello ${name} wants to buy ${amount} ${product} for price of ${unitprice} per piece`
console.log(message)

// var Neog = ['Tanvi', 'Swap', 'Tanay', 'MA', 'CA', 'PA', 'TA']
// CEO = Neog[0],
// Mentor = Neog[2];
const Neog = ['Tanvi', 'Swap', 'Tanay', 'MA', 'CA', 'PA', 'TA']
const [CEO, _, Mentor] = Neog
console.log(CEO, Mentor)

// var arr = ["MA", "TA", "PA", "CA"];
// var firstName = arr[0],
// var surname = arr[1];
// console.log(firstName);
// console.log(surname);
const arr = ['MA', 'TA', 'PA', 'CA']
const [firstName, surName] = arr
console.log(firstName)
console.log(surName)

// var Aaloo = "Tasty";
// var Bhaloo = "Cute";
// var Obj = {
//   Aaloo: Aaloo,
//   Bhaloo: Bhaloo
// };

const Aaloo = 'Tasty'
const Bhaloo = 'Cute'
const Obj = {
  Aaloo,
  Bhaloo,
}
console.log(Obj)

// var a = 5
// var b = 10
// console.log('Fifteen is '.concat(a1 + b1, ' and n0t ').concat(2 * a1 + b1, '.'))

// const a1 = 5
// const b1 = 10
// console.log(
//   `Fifteen is ${concat(a1 + b1, ' and n0t ').concat(2 * a1 + b1, '.')}`
// )

// var arithmeticsObj = {
//   sum: function sum(num1, num2) {
//     return num1 + num2;
//   },
//   multiply: function multiply(num1, num2) {
//     return num1 * num2;
//   }
// };

const arithmeticsObj = {
  sum: (num1, num2) => num1 + num2,
  multiply: (num1, num2) => num1 * num2,
}

const { sum, multiply } = arithmeticsObj
console.log(sum(10, 10))
console.log(multiply(10, 10))

const avengers = {
  operation: 'Assemble',
  members: [
    {
      ironMan: 'Tony Stark',
    },
    {
      captainAmerica: 'Steve Rogers',
    },
    {
      blackWidow: 'Natasha Romanoff',
    },
  ],
}
const { operation, members } = avengers
console.log(operation, members)

// 2. Convert ES6 to ES5

const packIt = (...args) => args
function packItEs5() {
  return Object.keys(arguments).map(val => arguments[val])
}

console.log(packIt(1, 2, 3, 5, 5))
console.log(packItEs5(1, 2, 3, 5, 5))

// 3. Guess the output
const hello = () => 'Hello'
const welcome = () => 'Welcome'
const [Hello = hello(), Welcome = welcome()] = ['Namaste']
console.log(Hello, Welcome) // Namaste Welcome

const obj = {
  alooNew: 1,
  bhallo: 2,
}
// const { c = [2, 3, 4].push(5) } = obj // returns 4 because after pushing into array the updated length of an array will be 4

const { c: alooNew = [2, 3, 4].push(5) } = obj

console.log(alooNew) // 4
console.log(c) // c is not defined
