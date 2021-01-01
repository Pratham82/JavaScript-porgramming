// Product of All Odd Integers
// Create a function that returns the product of all odd integers in an array.

// oddProduct([3, 4, 1, 1, 5]) ➞ 15

function oddProduct(arr) {
	return arr.filter((val) => val%2!=0)
}

console.log(oddProduct([5, 5, 8, 2, 4, 32]));