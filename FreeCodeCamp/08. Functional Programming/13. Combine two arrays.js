// Functional Programming: Combine Two Arrays Using the concat Method

/*
1. Concatenation means to join items end to end. 
2. JavaScript offers the concat method for both strings and arrays that work in the same way. 
3. For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array.
4. It returns a new array and does not mutate either of the original arrays.
*/

function nonMutatingConcat(original, attach) {
	// Only change code below this line
	return original.concat(attach);
	// Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);

console.log(nonMutatingConcat(first, second));
