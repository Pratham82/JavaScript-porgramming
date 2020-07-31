// function add(x, y) {
// 	return x + y;
// }

//* The function you’re passing as an argument is called a callback function and the function you’re passing the callback function to is called a higher-order function.

// function addFive(num, callbackFun) {
// 	return callbackFun(num, 5);
// }
// function addTen(num, callbackFun) {
// 	return callbackFun(num, 10);
// }
// function addTwenty(num, callbackFun) {
// 	return callbackFun(num, 20);
// }

// console.log(addFive(50, add)); //55
// console.log(addTen(50, add)); //60
// console.log(addTwenty(50, add)); //70

//* Again, this isn’t terrible, but we’re repeating a lot of the same logic.
//* The goal here is to be able to create as many “adder” functions (addFive, addTen, addTwenty, etc) as we need while minimizing code duplication. To accomplish this, what if we create a makeAdder function

//* This function can take in a number and a reference to the original add function. Because the goal of this function is to make a new adder function, we can have it return a brand new function that accepts the number to add. That was a lot of words. Let’s see some code.

function add(x, y) {
	return x + y;
}

//* This function will return another function which callbacks to add function
function makeAdder(x, addRef) {
	//* y will be passed when we invoke addFive,Ten or Twenty
	//* We can set the default value of for eg. y = 00
	return function (y = 0) {
		return addRef(x, y);
	};
}

const addFive = makeAdder(5, add);
const addTen = makeAdder(10, add);
const addTwenty = makeAdder(20, add);

//The value we are passing is "y"
console.log(addFive(10));
console.log(addTen());
console.log(addTwenty(10));
/*
 * this concept of having a function with multiple parameters return a new function with fewer parameters is called “Partial Application” and it’s a functional programming technique.
 * JavaScript’s “.bind” method is a common example of this.
 */
