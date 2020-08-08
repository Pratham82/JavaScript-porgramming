/*
Maximum Possible Total
Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

Examples
maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) ➞ 43

*/

function maxTotal(nums) {
	return nums
		.sort((a, b) => b - a)
		.slice(0, 5)
		.reduce((sum, val) => sum + val);
}

console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])); //43
