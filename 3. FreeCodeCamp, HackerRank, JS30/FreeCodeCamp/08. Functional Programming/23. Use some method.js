// Functional Programming: Use the some Method to Check that Any Elements in an Array Meet a Criteria

/*
1. The some method works with arrays to check if any element passes a particular test.
2. It returns a Boolean value - true if any of the values meet the criteria, false if not.
*/

/*
Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.
*/

function checkPositive(arr) {
	// Only change code below this line
	return arr.some((i) => i > 0);
	// Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);

console.log(checkPositive([1, 2, 3, -4, 5])); //true
