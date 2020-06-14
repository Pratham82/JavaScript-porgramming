// Functional Programming: Return Part of an Array Using the slice Method

/*
1. The slice method returns a copy of certain elements of an array. 
2. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). 
3. If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. 
4. The slice method does not mutate the original array, but returns a new one.
*/

/*
Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.
*/

function sliceArray(anim, beginSlice, endSlice) {
	// Only change code below this line
	let new_arr_local = [];
	new_arr_local = anim.slice(beginSlice, endSlice);
	return new_arr_local;
	// Only change code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
var new_arr = sliceArray(inputAnim, 1, 3);
console.log(new_arr);
