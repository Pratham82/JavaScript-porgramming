// Functional Programming: Introduction to Currying and Partial Application

/*

1. The arity of a function is the number of arguments it requires.
2. Currying a function means to convert a function of N arity into N functions of arity 1.

Example:
///Un-curried function
function unCurried(x, y) {
  return x + y;
}

///Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
///Alternative using ES6
const curried = x => y => x + y

curried(1)(2) // Returns 3

3. This is useful in your program if you can't supply all the arguments to a function at one time. 
4. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available.
Example: 

/// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3

5. partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments

Example:
///Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13

6. Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
7. Currying doesn’t call a function. It just transforms it.
*/

/*
Fill in the body of the add function so it uses currying to add parameters x, y, and z.
*/

function add(x) {
	// Only change code below this line
	return function (y) {
		return function (z) {
			return x + y + z;
		};
	};
	// Only change code above this line
}
add(10)(20)(30);

console.log(add(10)(20)(30));
