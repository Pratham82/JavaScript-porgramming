// Primitive types can be be created as object eg.(Strings, Number and Booleans). But it is advisable not to use them as objects because it slows down execution speed and increases code

//* Stings

let name1 = "Jake";
let name2 = new String("Jake");

console.log(name1); //Jake
console.log(name2); //String {"Jake"}

console.log(typeof name1); // string
console.log(typeof name2); // object

// We can add properties to the name2 to because its an object
name2.foo = "bar";
console.log(name2); //String {"Jake", foo: "bar"}

// Comparing actual value of the type of name1 and name2

// We are using triple equal to which will not convert the data type and checks the value as is so we get false for name2 because name 2 has typeof object
console.log(name1 === "Jake"); //true
console.log(name2 === "Jake"); //false

// This will return true because object's the value will be converted to string
console.log(name1 == "Jake"); //true
console.log(name2 == "Jake"); //true

//* Number

// Similar to strings when we create numbers using new keyword it will create a number object
const num1 = 45;
const num2 = new Number(45);

console.log(num1); // 45
console.log(num2); // Number {45}

console.log(typeof num1); // Number
console.log(typeof num2); // Object

//*  Boolean

const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool1); //true
console.log(bool2); //Boolean {true}

console.log(typeof bool1); // boolean
console.log(typeof bool2); // object

//* Function
// Normal function
const fn1 = function (a, b) {
	return a + b;
};

console.log(fn1(12, 12));

// Function with new keyword
// third argument will be the function body here
const fn2 = new Function("a", "b", "return a+b");

console.log(fn2(12, 10));

//*  Object

const bullet1 = { model: "250cc" };
const bullet2 = new Object({ model: "350cc" });

//*  Return same object
console.log(bullet1); //{model: "250cc"}
console.log(bullet2); //{model: "350cc"}

//* Arrays
const arr1 = [11, 12, 13, 14, 15];
const arr2 = new Array(11, 12, 13, 14, 15);

console.log(arr1); // (5) [11, 12, 13, 14, 15]
console.log(arr2); // (5) [11, 12, 13, 14, 15]

console.log(typeof arr1); // object
console.log(typeof arr2); // object

//* Regular expression

const re1 = /\w+/;
const re2 = RegExp("/\\w+/");

console.log(re1); //  \w+/
console.log(re2); //  //\w+//
// both are object type