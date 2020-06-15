// Functional Programming: Use the every Method to Check that Every Element in an Array Meets a Criteria

/*
1. The every method works with arrays to check if every element passes a particular test. 
2. It returns a Boolean value - true if all values meet the criteria, false if not.
*/

/*
Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.
*/

function checkPositive(arr) {
	// Only change code below this line
	return arr.every((i) => i > 0);
	// Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);

console.log(checkPositive([1, 2, 3, -4, 5])); //false
