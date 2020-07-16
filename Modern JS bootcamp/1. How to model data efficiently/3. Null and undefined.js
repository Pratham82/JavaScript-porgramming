/*
* Null and undefined are primitive data types
* Null:
1. Intentional absence of any value 
2. must be assigned

* Undefined:
1. Variables that do not have a assigned value are undefined
*/

//* null example

// No one is logged in yet
let loggedInUser = null; //value is explicitly nothing

// A user logs in...
loggedInUser = "Joe Jonas";

//* undefined example

let str = "POPPY";

// This will return undefined because the index 5 does not present inside the str
console.log(str[5]); //undefined

let test;

console.log(test); // undefined

//* We can also explicitly set a variable undefined
let test2 = undefined;

console.log(test2);
