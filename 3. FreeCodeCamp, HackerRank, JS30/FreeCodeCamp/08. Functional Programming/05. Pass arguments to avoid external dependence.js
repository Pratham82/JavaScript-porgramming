// Functional Programming: Pass Arguments to Avoid External Dependence in a Function

/*
1. Another principle of functional programming is to always declare your dependencies explicitly. 
This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

2. BY doing this: The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.

3. Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.
*/

/*
Let's update the incrementer function to clearly declare its dependencies.

Write the incrementer function so it takes an argument, and then returns a result after increasing the value by one.
*/

// The global variable
var fixedValue = 4;

// Only change code below this line
function incrementer(value) {
	return value + 1;
	// Only change code above this line
}

console.log(incrementer(4));
