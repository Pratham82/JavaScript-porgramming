// Integer in Range?
// Create a function which validates whether a number n is exclusively within the bounds of lower and upper. Return false if n is not an integer.

// Examples
// intWithinBounds(3, 1, 9) ➞ true

// intWithinBounds(6, 1, 6) ➞ false

// intWithinBounds(4.5, 3, 8) ➞ false

function intWithinBounds(n, lower, upper) {
	let arr = [];
	for (let i = lower; i <= upper; i++) {
		arr.push(i);
	}

	return n in arr || (n < upper && n % 1 == 0);
}

console.log(intWithinBounds(3, 1, 9));
console.log(intWithinBounds(6, 1, 6));
console.log(intWithinBounds(4.5, 3, 8));
console.log(intWithinBounds(-5, -10, 6));
console.log(intWithinBounds(7, 7, 12));
