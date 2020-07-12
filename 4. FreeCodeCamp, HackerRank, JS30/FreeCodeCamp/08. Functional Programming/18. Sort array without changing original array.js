// Functional Programming: Return a Sorted Array Without Changing the Original Array

/*
Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.
*/

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
	// Only change code below this line
	var newArr = arr.slice().sort();
	return newArr;
	// Only change code above this line
}
nonMutatingSort(globalArray);
console.log(nonMutatingSort(globalArray)); //[2, 3, 5, 6, 9]
console.log(globalArray); //[5, 6, 3, 2, 9]  og array remains unchanged
