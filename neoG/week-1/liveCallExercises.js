let a = 100

// function run() {
//   console.log(a) // Cannot access 'a' before initialization
//   this will give an error because the let has block scope and if we are initializing it again
//   let a = 200
// }
// run()

function run2() {
  console.log(a) // undefined
  var a = 200
}
run2()

/*
Imp interview questions

TDZ
*/
// / with no parameter
const getNum = () => 2
function getNum2() {
  return 2
}
console.log(getNum2())

// with one parameter
const isOne = num => num === 1
console.log(isOne(12))

function isOne2(a) {
  return a === 1
}

console.log(isOne2(10))

const add22 = num => num + 22
console.log(add22(100))

const getObj = (n1, n2) => ({ a: n1, b: n2 })

console.log(getObj(100, 200))

function def(n1, n2) {
  n1 = n1 ? n1 : 0
  n2 = n2 ? n2 : 0
  return n1 + n2
}
console.log(def(100))
// Read about
// nullish coelscing operator

// default parameter can only be available from the right most part
const defExample = (a, b = 5, c) => a + b + c

console.log(defExample(1, 2, 3)) // 6
console.log(defExample(1, 2, 3)) // 6
// console.log(defExample(1, , 3)) // Syntax error

//* Nullish coalescing
const defExample2 = (a, b, c) => {
  b = b ?? 0
  c = c ?? 0
  return a + b + c
}

console.log(defExample2(10, 10))

// * Rest and spread
const restArr = (first, second, ...rest) => console.log(first, second, rest)
function restArrFn() {
  return arguments
}
restArr(1)

console.log(restArrFn(10, 20, 40))

const showSpread = [1, 2, 3, 4]

const newArr = [...showSpread, 6, 7, 8]
const newArr2 = [[...showSpread], 6, 7, 8] // [[1,2,3,4], 6,7,8]
console.log(newArr) // [1,2,3,4,6,7,8]
console.log(newArr2) // [[1,2,3,4],,6,7,8]

// * Object destructuring and assigning value
const obj1 = { name: 'prathamesh', team: 'c2' }

const { name: firstName, team: teamName } = obj1
console.log(firstName) // prathamesh
console.log(teamName) // c2

// Dynamic property naming

const propName = 'firstName'

const student = {
  [propName]: 'Prathamesh',
}

console.log(student) // {firstName :'Prathamesh'}

const name = 'Prathamesh'
const studentShorthand = { name } // the key name will be name and value of the name is come from the variable name
console.log(studentShorthand) // { name: 'Prathamesh' }

const vals = [11, 12, 13, 14, 15]

const checkOddEven = num => num % 2 == 0
const checkVal = num => `value is${checkOddEven(num) ? ' even' : ' odd'}`

console.log(checkVal(2))

console.log(checkVal(12))
console.log(checkVal(13))

const checkOddEvenNew = num => `value is ${num % 2 === 0 ? ' even' : 'odd'}`

console.log(checkOddEvenNew(2)) // value is even
