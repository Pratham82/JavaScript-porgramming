// ES6: Use Destructuring Assignment to Assign Variables from Arrays

// One key difference between the spread operator and array destructuring is that 
// the spread operator unpacks all contents of an array into a comma-separated list.
// Consequently, you cannot pick or choose which elements you want to assign to variables.
// Destructuring an array lets us do exactly that

//Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

let a = 8, b = 6;
// Only change code below this line
[a, b] = [b,a]

console.log("a: ", a);
console.log("b: ", b);