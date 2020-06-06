// ES6: Use Arrow Functions to Write Concise Anonymous Functions

// In JavaScript, we often don't need to name our functions, especially when passing 
// a function as an argument to another function.
// Instead, we create inline functions. We don't need to name these functions because 
// we do not reuse them anywhere else.

// When there is no function body, and only a return value, arrow function syntax 
// allows you to omit the keyword return as well as the brackets surrounding the code.

/* Rewrite the function assigned to the variable magic which returns a new Date() 
to use arrow function syntax. Also, make sure nothing is defined using the keyword var.
*/


//const magic = () => {return new Date() }  //With return keyword
const magic = () => new Date()            // More concise

console.log((magic()));