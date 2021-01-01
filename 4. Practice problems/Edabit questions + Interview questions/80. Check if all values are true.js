//Check If All Values Are True
//Create a function that returns true if all parameters are truthy, and false otherwise

const allTruthy = (...args) => args.every((val) => val);

console.log(allTruthy(true, false, true));
console.log(allTruthy(true, true, true));
console.log(allTruthy(5, 4, 3, 2, 1, 0));
