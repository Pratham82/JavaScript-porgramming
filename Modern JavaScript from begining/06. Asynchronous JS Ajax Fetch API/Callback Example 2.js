// We can take as many callbacks we want, and we can pass them as anonymous functions or already declared function

// Similarly here we are taking two callback functions as objects and one variable

const add10 = (n) => {
	console.log(n + 10);
};

const functionNew = (callback1, callback2, callback3, var1) => {
	callback1(var1);
	callback2(var1);
	callback3(var1);
};

// In 1st anonymous function we are finding the square of variable and in second anonymous function we are finding the cube of a variable
functionNew(
	(n) => {
		console.log(n ** 2);
	},
	(n) => {
		console.log(n ** 3);
	},
	add10,
	2
);
