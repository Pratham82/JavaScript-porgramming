// Declaring variables

/**
 * 1. var (Since the beginning of the JS)
 * 2. let  (Introduced in ES2015 / ES6)
 * 3. cost (Introduced in ES2015 / ES6)
 */

// We can change/ reassign the value if we are using var or let
//* Declaring variable using var
var var1 = "test 1";
console.log(var1);

var1 = "test 2";
console.log(var1);

// Init var
var Greeting;
console.log(Greeting);  // This will be undefined because value is not assigned to Greeting

Greeting = "Hello there"
console.log(Greeting);  // Logging after value is defined

// Variable can include: letters, numbers, _ and $
// Also variables cannot start with numbers

// Multi-word variables
var firstName  = "Felix"  // Camel case | Mostly used
var first_name = "Dan"  // Underscore method
var FirstName  = "Joe"  // Pascal case | Used in OOP for declaring classes

//* Declaring variables using let 
// We cannot redeclare let variables, but we can reassign variables.
let var2 = "test 1 (let)";
console.log(var2);

//let var2 = "test 2 (let)";  Not allowed because var2 is already declared, so we can just reassign it
var2 = "test 2 (let)";
console.log(var2);


//* Declaring variables with const
/*
Rules: 
 1. We cannot reassign const variables
 2. When we initialize a new const, value should be assigned otherwise it will cause an error
*/
const var_1_new = "String1 (const)"
console.log(var_1_new)

// var_1_new ="String new(const)" error: (Uncaught TypeError: Assignment to constant variable.)
//cause-> because, we cannot reassign const

// const city;  error(Missing initializer in const declaration)
//cause-> because, initial value of const cannot be empty, the one should always assign value when const is initialized

//*  Const with arrays and objects 
// We can change the values inside the objects, but we cannot change the object itself

const objDog = {
    name: 'Ghost',
    fur:'White',
    breed:'Husky'
}

// const objDog= {name:"hosts"} error: (Identifier 'objDog' has already been declared)
// cause ->  const objects cannot be redefined
// objDog= {name:"hosts"} error: (Uncaught TypeError: Assignment to constant variable.)
// cause-> const objects cannot be reassigned

// Adding new property and value in object
objDog.test = "new value";
console.log(objDog); 

// Changing existing value
objDog.name = 'Rod'
console.log(objDog); 


const arrMyArr =[451,5,4,56,88787,1]

// Adding new value in array
arrMyArr.push(9999)
console.log('arrMyArr:', arrMyArr)


// arrMyArr = [654,45564] error: (Uncaught TypeError: Assignment to constant variable.)
// cause-> const array cannot be reassigned