const base_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Operations that we want to perform on each array
// 1. Triple the Number
// 2. Find Square of it
// 3. Take only the numbers which are divisible by 2
// 4. Find the average of these numbers

// 1. Triple the number
const triple = (arr) => arr.map((n) => n * 3)

// 2. Find the square of that number
const square = (arr) => arr.map((n) => n * n)

// 3. Filter out the number which are not divisible by 2
const filter_out = (arr) => arr.filter((n) => n % 2 == 0)

// 4. Find the average of the array
const avg = (arr) => arr.reduce((ac, val) => ac + val) / arr.length

var op1 = triple(base_arr)
var op2 = square(op1)
var op3 = filter_out(op2)
var op4 = avg(op3)

console.log(`Base Array => ${base_arr}`)
console.log(`Array after tripling => ${op1}`)
console.log(`Array after squaring => ${op2}`)
console.log(`Array after filtering evens => ${op3}`)
console.log(`Value after finding average => ${op4}`)

// Combining all stages together
const concise_op = avg(filter_out(square(triple(base_arr))))
console.log(`Concise op => ${concise_op}`)

//***** Creating a compose function
/*The reduceRight() method applies a function against an accumulator and each value 
of the array (from right-to-left) to reduce it to a single value.
*/
//* reduceRight parameters
// reduceRight((accumulator, currentValue, index, array) => { ... }, initialValue)

// const compose =
//   (...fns) =>
//   (x) =>
//     fns.reduceRight((y, f) => f(y), x)

// Step 1 => taking array of functions as param
// Step 2 => Return each function
// Step 3 => Using reduceRight function on the array of functions
// Step 4 => Perform the operation on th accumulated value
const compose =
  (...fns) =>
  (f) =>
    fns.reduceRight((acc, fun) => fun(acc), f)

// let compose_op = compose(square)(base_arr)

// ** Order of calling the functions: (right to left)️ ⬅️  ⬅️️
// the order in which we wanted to perform the operation should be from
// right to left i.e :
// compose_function(function_4, function_3, ⬅️ function_2, ⬅️ function_1)(base_arr)
let compose_op = compose(avg, filter_out, square, triple)(base_arr)
console.log(`Compose op => ${compose_op}`)

//****** Using pipe
const pipe =
  (...fns) =>
  (f) =>
    fns.reduce((acc, fun) => fun(acc), f)

// ** Order of calling the functions: (right to left)️ ➡️  ➡️
let pipe_op = pipe(triple, square, filter_out, avg)(base_arr)
console.log(`Pipe op => ${pipe_op}`)
