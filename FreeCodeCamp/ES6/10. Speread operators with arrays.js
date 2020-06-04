// ES6: Use the Spread Operator to Evaluate Arrays In-Place

// ES6 introduces the spread operator, which allows us to expand arrays and 
// other expressions in places where multiple parameters or elements are expected.
// ...arr returns an unpacked array

// In other words, it spreads the array. However, the spread operator only works in-place,
// like in an argument to a function or in an array literal. 
// const spreaded = ...arr; // will throw a syntax error

// Copy all contents of arr1 into another array arr2 using the spread operator.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);
