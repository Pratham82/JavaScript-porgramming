// Basic Calculator
// Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

// Examples
// calculator(2, "+", 2) ➞ 4

// calculator(2, "*", 2) ➞ 4

const calculator = (num1, operator, num2) =>
	num1 && num2 > 0
		? eval(`${num1} ${operator}${num2}`)
		: "Can't divide by 0!";

console.log(calculator(2, "*", 2));
