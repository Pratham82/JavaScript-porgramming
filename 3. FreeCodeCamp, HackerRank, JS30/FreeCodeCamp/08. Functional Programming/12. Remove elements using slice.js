// Functional Programming: Remove Elements from an Array Using slice Instead of splice

/*
1. JavaScript offers the splice method for this, which takes arguments for the index of where to start removing items, then the number of items to remove.
2. If the second argument is not provided, the default is to remove items through the end. However, the splice method mutates the original array it is called on.
*/
/*
Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3, and return a new array with only the first three items.
*/

function nonMutatingSplice(cities) {
	// Only change code below this line
	var new_array = [];
	new_array = cities.slice(0, 3);
	return new_array;

	// Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
console.log(nonMutatingSplice(inputCities));

// My Practice for splice function----------------------------------------------
var arr = [454, 11, 78, 45, 95, 41];
console.log(arr);

arr.splice(1);
//console.log("new_arr:", new_arr);

console.log("arr: ", arr);

var arr_copy = [454, 11, 78, 45, 95, 41];

// Storing spliced elements in new array
var new_arr = arr_copy.splice(1);
console.log(new_arr);
