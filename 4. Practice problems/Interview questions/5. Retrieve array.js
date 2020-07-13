/*
Retrieve the Last N Elements
Write a function that retrieves the last n elements from an array.

Examples
last([1, 2, 3, 4, 5], 1) ➞ [5]

last([4, 3, 9, 9, 7, 6], 3) ➞ [9, 7, 6]

last([1, 2, 3, 4, 5], 7) ➞ "invalid"

last([1, 2, 3, 4, 5], 0) ➞ []

*/

function last(a, n) {
	// Using if else
	// if (n > a.length) {
	// 	return "invalid";
	// } else if (n == 0) {
	// 	return [];
	// } else {
	// 	return a.slice(-n);
	// }

	//Using ternary operator
	return n > a.length ? "invalid" : n == 0 ? [] : a.slice(-n);
}
console.log(last([1, 2, 3, 4, 5], 1)); // [5]
console.log(last([4, 3, 9, 9, 7, 6], 3)); // [ 9, 7, 6 ]
console.log(last([1, 2, 3, 4, 5], 0)); //[]
