// Number and Math Objects


const num1 = 100 
const num2 = 50 
let result

// Basic arithmetic
result =  num1 + num2    //150 
result =  num1 * num2    //5000
result =  num1 / num2    //2
result =  num1 - num2    //50
result =  num1 % num2    //0

// Math objects
result = Math.PI;                        // PI: 3.141592653589793
result = Math.E;                         // Euler's number: 2.718281828459045
result = Math.round(152.36)              // 152
result = Math.ceil(152.36)               // 153 ; ceil rounds up the value 
result = Math.floor(152.89)              // 152 ; removes the decimal point
result = Math.sqrt(144)                  // 12 ; square root of 144
result = Math.abs(-4541)                 // 4541 ;  makes number absolute
result = Math.pow(15,2)                  // 255 ; 15^2: 225
result = Math.min(15,2,7,1)              // 1 ; minimum value
result = Math.max(15,2,7,1)              // 15 ; maximum value
result = Math.random()*20                // gives out random decimal, //the number which is multiplied by is the max random number  can be generated
result = Math.floor(Math.random()*20+1)  // Floor the float value , The number which is multiplied by is not mentioned if want that number add 1 to it so range is upped by 1 to the given number
console.log("result: ", result);