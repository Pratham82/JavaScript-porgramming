// ES6: Use the Rest Parameter with Function Parameters

// ES6 introduces the rest parameter for function parameters.
// With the rest parameter, you can create functions that take a variable number of arguments. 
//  These arguments are stored in an array that can be accessed later from inside the function.


/*
Modify the function sum using the rest parameter in such a way that the function
sum is able to take any number of arguments and return their sum.
*/

// We used rest operator '...' front of any word will spread the element of that array.
// Normally it is called spread operator but when we pass it in a function argument then it becomes rest operator.

// const sum = (...args) => {               
//     return args.reduce((a, b) => a + b);
// }

// more concise way: 
const sum = (...args) => args.reduce((a, b) => a + b,0);


console.log(sum(45,45,45,45));