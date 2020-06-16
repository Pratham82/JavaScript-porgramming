// Intermediate Algorithm Scripting: Seek and Destroy

/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
	var args = Array.from(arguments).slice(1);
	return arr.filter((i) => !args.includes(i));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); //[1, 1]
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); //[1]
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); //["hamburger"]

const destroyerES6 = (arr, ...values) => arr.filter((i) => !values.includes(i));

console.log(destroyerES6([1, 2, 3, 1, 2, 3], 2, 3)); //[1, 1]
