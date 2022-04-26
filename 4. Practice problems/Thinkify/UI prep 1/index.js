//** Var let const difference
/**
 declaration of variable
 let data;

 // re-declaration 
 let data 

 initialization of variable
 data = {name: 'Joe'}

 // re-initialization
 data = {name: 'David'}

 Scopes
 var: global, function scope
 let, const: block scope
 */
var a = 100
{
  // variables declared with var have a global/ function scope
  var a = 200

  console.log(b) // undefined(using variable before declaration)
  var b = 100
}
console.log({ a })

let aa = 100
// let aa = 200; // Re-declaration not allowed
{
  // Variables defined with let has a block scope
  // console.log({ aa }) // ReferenceError (because accessing it before declaration)
  let aa = 200
  // let aa = 200; // SyntaxError(cannot redeclare)
  let bb = 250
  aa = 500
}
// console.log(bb); // ReferenceError (because bb in limited to the block scope)
aa = 240
{
  //Users can declare the variable with the same name in different blocks using the let keyword.
  let data = 190
  console.log({ data })
  if (true) {
    let data = 200
    console.log({ data })
  }
}
console.log({ aa })

// **const
// The const keyword has all the properties that are the same as the let keyword, except the user cannot update it.
const PI = 3.14
// function getPi() {
//   PI = 3.1415 // TypeError: Assignment to constant variable.
//   console.log(PI)
// }
// getPi()

// Users cannot change the properties of the const object, but they can change the value of properties of the const object.
const obj = {
  name: 'Joe',
  age: 30,
}

obj.name = 'David'
obj.age = 40
console.log(obj) // {name: 'David', age: 40}

obj.designation = 'Developer'
console.log(obj) // {name: 'David', age: 40, designation: 'Developer'}

// obj = {
//   dateOfBirth: '01/01/1990',
// } // TypeError: Assignment to constant variable.

//** 2. Promises
//* The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Success')
//   }, 2000)
// }

// const myPromise = new Promise((resolve, reject) => {
//   // resolve('Success')
//   // setTimeout(() => resolve('Promise Resolved'), 2000)
//   setTimeout(() => reject('Promise Rejected'), 2000)
// })

// const fetchRes = async () => {
//   try {
//     const res = await myPromise
//     console.log(res)
//   } catch (error) {
//     console.log({ error })
//   }
// }

// fetchRes()

const dataNew = true
// function watchVideosCallback(callback, errorCallback) {
//   if (dataNew) {
//     callback({
//       success: true,
//       data: dataNew,
//     })
//   } else {
//     errorCallback({
//       success: false,
//       data: dataNew,
//     })
//   }
// }

// watchVideosCallback(
//   message => {
//     console.log(message)
//   },
//   err => {
//     console.log(err)
//   }
// )

//* Converting to promises
// Provides cleaner code, and fixed callback hell
function watchVideosCallback() {
  return new Promise((resolve, reject) => {
    if (dataNew) {
      resolve({
        success: true,
        data: dataNew,
      })
    } else {
      resolve({
        success: false,
        data: dataNew,
      })
    }
  })
}

// watchVideosCallback()
//   .then(res => console.log(res))
//   .catch(err => console.error(err))

const promise1 = new Promise((resolve, reject) => {
  resolve('Promise 1 resolved')
})

const promise2 = new Promise((resolve, reject) => {
  resolve('Promise 2 resolved')
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promise 3 resolved'), 2000)
})

// ;(async () => {
//   const results = await Promise.race([promise1, promise2, promise3])
//   console.log(results)
// })()

/*
 * Promise.race: its settled as soon as any of the promises ou feed it settles, whether they are fullFilled or rejected
 * Promise.any: its settled as soon as any of te promises you feed it is fullFilled or they are all rejected
 */
const p1 = new Promise((res, rej) => {
  setTimeout(() => res('p1 resolved'), 2000)
})

const p2 = new Promise((res, rej) => {
  setTimeout(() => res('p2 resolved'), 3000)
})

const p3 = new Promise((res, rej) => {
  // setTimeout(() => res('p3 resolved'), 1000)
  setTimeout(() => res('Error in fetching'), 1000)
})

// ;(async () => {
//   try {
//     const res = await Promise.race([p1, p2, p3])
//     console.log(res)
//   } catch (error) {
//     console.log(error)
//   }
// })()
// ;(async () => {
//   try {
//     const res = await Promise.any([p1, p2, p3])
//     console.log(res)
//   } catch (error) {
//     console.log(error)
//   }
// })()

//**  Promise chaining

// Guess the output
function promisify(number, increase) {
  return new Promise(resolve =>
    setTimeout(() => resolve(number * 2 + increase), 100)
  )
}
async function double(number, increase) {
  const value = await promisify(number, increase)
  return value
}
async function run() {
  let result
  result = await double(5, 0) //  10
  result = await double(10, result) // 10 + 20
  result = await double(20, result) // 30 + 40
  console.log(result) // 70
}
run()

//** Guess the output
// for (var i = 1; i <= 3; i++) {
//   ;(function (index) {
//     setTimeout(function () {
//       console.log(index)
//     }, i * 1000)
//   })(i)
// }

/*
1
2
3
*/

// for (var i = 1; i <= 3; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, i * 1000)
// }

// for (var i = 1; i <= 3; i++) {
//   // console.log(i)
//   setTimeout(() => console.log(i), i * 1000)
// }

let x = true
let count = 0
setTimeout(() => {
  x = false
}, 2000)
while (1) {
  if (x) {
    count++
    console.log(count)
  }
}

/*
- While loop will run for infinite time, because the thread of execution 
is not passed ot the next line i.e the line where the x is becoming false.
- The line that does the value of x is false is inside setTimeout's callback method
because its a part of browser APIs so it will run only after the call stack is empty.
- The call stack continuously getting filled with count++ that's why it this will loop will
run infinitely
*/
