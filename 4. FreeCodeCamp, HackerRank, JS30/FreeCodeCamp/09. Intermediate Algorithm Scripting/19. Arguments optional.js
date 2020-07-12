// Intermediate Algorithm Scripting: Arguments Optional

/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether(num1, num2) {
	if (isNaN(num1)) {
		return undefined;
	}
	let sum = (num2) => (typeof num2 === "number" ? num1 + num2 : undefined);
	return typeof num2 === "undefined" ? (num2) => sum(num2) : sum(num2);
}

addTogether(2, 3);
console.log(addTogether(2, 3));
console.log(addTogether(2)(3));
console.log(addTogether(5)(7));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));

// last tow test cases not passing with this
/*
if (isNaN(num1)) {
	return undefined;
}
var on_arg = (n) => n;
if (num2 == undefined) {
	var arg_t = (n) => on_arg(num1) + n;
	return arg_t;
}
return num1 + num2;

*/
