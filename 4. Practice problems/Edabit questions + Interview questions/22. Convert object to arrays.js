// Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair.
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

function toArray(obj) {
	let arr = [];
	let keys = Object.keys(obj);
	let values = Object.values(obj);
	for (let i = 0; i < keys.length; i++) {
		arr.push([keys[i], values[i]]);
	}
	return arr;

	//* Easier way
	// return Object.entries(obj);
}

console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({}));
