// Remove duplicate values from an array

let a = [1, 4, 5, 1, 2, 2, 4, 9, 5];

//* Method 1 brute force method
//* Complexity of an array:n ^2
function remDuplicates(arr) {
	let newArr = [];
	let len = arr.length; // We are storing the length in len because calling it multiple times
	for (var i = 0; i < len; i++) {
		// from newArr.indexOf(a[i]) we are checking if element from arr is not present at newArr and if it isn't then push the value of a
		if (newArr.indexOf(a[i]) === -1) {
			newArr.push(arr[i]);
		}
	}
	// Return the new array
	return newArr;
}
console.log(remDuplicates(a)); //[ 1, 4, 5, 2, 9 ]

//**** Method 3 (Using quicksort)

function remDuplicates2(arr) {
	let newArr = [];
	let len = arr.length;
	let temp;
	arr.sort(); // We will get an array in ascending order
	for (i = 0; i < len; i++) {
		// If the element is not same to the temp element then we will add that element to the new array
		if (arr[i] != temp) {
			newArr.push(arr[i]);
			// Setting the temp value to the latest element so the next time it will check for duplicate value
			temp = arr[i];
		}
	}
	return newArr;
}
console.log(remDuplicates2(a)); //[ 1, 2, 4, 5, 9 ]

//*** Method 4 (Using objects)
let obj = {};

for (let i of a) {
	obj[i] = "val";
}

let newArr = [...Object.keys(obj)].map((i) => parseInt(i));
//[ '1', '2', '4', '5', '9' ]

// Easiest way
let b = new Set(a);
console.log([...b]); //[ 1, 4, 5, 2, 9 ]
