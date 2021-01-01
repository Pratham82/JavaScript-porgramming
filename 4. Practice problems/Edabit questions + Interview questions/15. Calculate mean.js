/*
Calculate the Mean
Create a function that takes an array of numbers and returns the mean value.

Examples
mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]) ➞ 2.55

*/

function mean(arr) {
	return parseFloat(
		(arr.reduce((sum, val) => val + sum) / arr.length).toFixed(2)
	);
}

console.log(mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3])); // 2.55
console.log(mean([2, 3, 2, 3])); //2.5
console.log(mean([3, 3, 3, 3, 3])); //3
