console.log(x)
// console.log(name)
fnGreeting('Prathamesh') // run because functions are hoisted
// varFnGreeting('Prathamesh') // error because its a variable
// varGreeting('Prathamesh') // error because var is undefined

var x = 110
function fnGreeting(name) {
  console.log(`Hi! ${name}`)
}

var varFnGreeting = function (name) {
  console.log(`Hi! ${name}`)
}

var varGreeting = name => {
  console.log(`Hi! ${name}`)
}

const name = 'Prathamesh'

// create new promise
const myPromise = () =>
  new Promise((res, rej) => {
    res({ message: 'success' })
  })

const sleep = delay =>
  new Promise((res, rej) => {
    setTimeout(() => res({ message: ' resolved' }), delay * 1000)
  })

const fetchData = async () => {
  try {
    // await sleep(3)
    const data = await myPromise()
    console.log(data)
  } catch (e) {
    console.log(e)
  }
}

fetchData()

const arr1 = [11, 12, 13, 14, 15]
for (let i of arr1) {
  console.log(i, typeof i)
}

for (let i in arr1) {
  console.log(i, typeof i)
}
