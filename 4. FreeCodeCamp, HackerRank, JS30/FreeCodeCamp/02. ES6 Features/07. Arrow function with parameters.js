// ES6: Write Arrow Functions with Parameters

// If an arrow function has a single argument, the parentheses enclosing the argument may be omitted.

// It is possible to pass more than one argument into an arrow function.


/*
Rewrite the myConcat function which appends contents of arr2 to arr1 so that 
the function uses arrow function syntax.
*/


const myConcat = (arr1, arr2) => arr1.concat(arr2)

console.log(myConcat([1, 2], [3, 4, 5]));
