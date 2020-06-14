// Functional Programming: Avoid Mutations and Side Effects Using Functional Programming

/*
1. One of the core principles of functional programming is to not change things. Changes lead to bugs. 
It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

2. Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect.

3. A function, ideally, should be a pure function, meaning that it does not cause any side effects.
*/

/*
Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.
*/

// The global variable
var fixedValue = 4;

function incrementer() {
	// Only change code below this line
	return fixedValue + 1;
	// Only change code above this line
}

console.log(incrementer());
