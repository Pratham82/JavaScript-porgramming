// Function Factory
// Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.

// Please check the examples below for a clearer representation of the behavior expected.

// Examples
// Calling makePlusFunction(5) returns a new function that takes an input,
// and returns the result when adding 5 to it.

// const plusFive = makePlusFunction(5)

// plusFive(2) ➞ 7

// plusFive(-8) ➞ -3

// const plusTen = (n) => makePlusFunction(n);

const makePlusFunction = (baseNum) => (fun) => baseNum + fun;

//* Explanation
// function makePlusFunction(baseNum) {
// 	return function (x) {
// 		return x + baseNum;
// 	};
// }

// const plusFive = makePlusFunction(5);
// console.log(plusFive(30));

// console.log(makePlusFunction(10)(45));
// makePlusFunction(baseNum: any): (x: any) => any
