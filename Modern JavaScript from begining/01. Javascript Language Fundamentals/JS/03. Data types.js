/* 
* Primitive data types:
Stored directly in the location the variable access
Stored on the stack
1. Strings
2. Numbers (Integers, Decimals, Floats)
3. Boolean 
4. Null
5. Undefined (Variable which doesn't have any value)
6. Symbols (ES6)

* Reference data types:
Accessed by reference
Objects that are stored on the heap
A pointer to location in memory

1. Arrays
2. Object literals
3. Functions
4. Dates
5. Anything else 

JS is dynamically typed language
1. Types are associated with values not variables
2. Same variable can hold multiple values
3. We do not need to specify types
4. Most other languages are statically typed(Java,C#,C++)
5. Super-sets and addons of JS allows static typing (TypeScript, Flow)
*/


//* Primitive types:

// String
const name = "Prathamesh"
console.log('name:',typeof name)

// Number:
const num1 = 5456
const num2 = 65.5
console.log('num1:',typeof num1)
console.log('num2:',typeof num2)

// Boolean
const bool1 = true
console.log('bool1:',typeof bool1)
const bool2 = false
console.log('bool2:',typeof bool2)

// Null 
const student = null
console.log('student:',typeof student)

// Undefined
const value1 = undefined //because const can't be kept unassigned 
console.log('value1:',typeof value1)

let value2
console.log('value2:',typeof value2);

// Symbols
const symbol1 = Symbol()
console.log('symbol1:',typeof symbol1)


//* Reference types (objects)

// Arrays
const myArray1 = ['Tester', 'Software Developer','DevOps Engineer','Security Engineer']
console.log('myArray1:', typeof myArray1)

const myArray2 = ['String',5645, 454.1,'a',null ]
console.table(myArray2);
console.log('myArray2:', typeof myArray2)

// Object literals
const Address = {
    Country:'India',
    State:'Maharashtra',
    City:'Mumbai'
}
console.log(Address);
console.table(Address);
console.log('Address: ', typeof Address);

// Date
const today = new Date()
console.log(today);
console.log("today: ", typeof today);