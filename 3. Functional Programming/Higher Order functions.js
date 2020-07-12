// Function which return another function

/*
In Javascript function are values/objects an you can exploit this by defining your code into small simple functions and composing them together using higher order functions
*/

// Normal way
// function multiplier(x, factor) {
// 	return x * factor;
// }

// Instead of passing x in multiplier  we can return a function that receives x and multiplies it by some factor
// So when we call multiplier it will take factor which is passed as parameter and returns a function which has that factor
// function multiplier(factor) {
// 	return function (x) {
// 		return x * factor;
// 	};
// }

// We can convert the above function to an arrow function
// function multiplier(factor) {
// 	return (x) => x * factor;
// }

// Or we can make it in one line
const multiplier = (fact) => (x) => x * fact;

let doubler = multiplier(2);
console.log(typeof doubler); // function
/*
here the value of factor will be 2
ƒ (x) {
    return x * factor;
}
*/

let tripler = multiplier(3);
console.log(typeof tripler); // function
/*
here the value of factor will be 3
ƒ (x) {
		return x * factor;
	}
*/

// So basically doubler and tripler are basically functions which returns the double or triple of the number which is provided

console.log(doubler(4)); //8
console.log(tripler(3)); //9
