// Functional Programming: Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

/*
We have defined a function named squareList. You need to complete the code for the squareList function using any combination of map(), filter(), and reduce() so that it returns a new array containing only the square of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array containing only real numbers is [-3, 4.8, 5, 3, -3.2].
*/

const squareList = (arr) => {
	// Only change code below this line
	var newArr = arr.filter((i) => i > 0 && i % 1 == 0).map((i) => i ** 2);
	return newArr;
	// Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
// For checking if the is decimal
console.log(42.5 % 1 != 0); // Returns true
console.log(42 % 1 != 0); // Returns false
