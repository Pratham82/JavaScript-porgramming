/*
* Math objects 
1. Contains properties and methods for mathematical constants and function
*/
//* Math object
console.log(Math);
// Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}

//* Math.PI
// This will return a PI value
console.log(Math.PI); //3.141592653589793

//* Math.floor()
// This method will remove the decimal points and return the number
console.log(Math.floor(4.2256)); //4

//* Math.round()
// This method will round of the value and returns it
console.log(Math.round(12.5)); //13

console.log(Math.round(12.4)); //12

console.log(Math.round(12.8)); //13

//* Math.pow()
// Return the number to the power of provided number
console.log(Math.pow(12, 2)); //144

console.log(Math.pow(25, 2)); //625

console.log(Math.pow(3, 3)); //27

//* Math.random()
// Returns random decimal between 0 to 1 (non-inclusive) every time we call it

console.log(Math.random());

//* Get random number from 1-10

const step1 = Math.random();
console.log(step1); //0.4458983067628113

const step2 = step1 * 10;
console.log(step2); //4.458983067628113

const step3 = Math.floor(step2);
console.log(step3); //4

const step4 = step3 + 1;

console.log(step4); //5

// Combining it all together
let randomNumb = Math.floor(Math.random() * 10) + 1;
console.log(randomNumb);

//* Emulating a dice roll
let diceRoll = Math.floor(Math.random() * 6) + 1;
console.log(`Dice roll : ${diceRoll}`); //3
