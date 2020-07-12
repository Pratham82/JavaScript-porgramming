// In javascript functions are objects at the same time since we can objects to functions as parameters, and we call functions inside another functions as well

/* 
* The function passed in another function is called an callback function
* A callback is a piece of executable code i.e passed as an argument to other code which expected to call back argument at some convenient time
*  The invocation can be immediate as in na synchronous callback or it may happen later as an asynchronous callback 

*/
//Example
//Def: A function that is passed to another function as a parameter is a callback function
function print(callback) {
	callback();
}

/*
taskOne();
taskTwo();
taskThree();
1. Why do we need callback functions

2. Javascript runs code sequentially in the top down order. So first taskOne function is executed then taskTwo is executed and so on

3. However there are some cases when one function or task must before another function but not before it. This may not happen in sequential order and thats why its called asynchronous programming

4. For example taskOne make an external request, this means it should wait for an response, and in the same scenario taskTwo should be run after taskOne is completed execution but not before that. IN that scenario we will use async await.

Example: 

*/

const taskOne = () => {
	console.log("Task 1️⃣");
};
const taskTwo = (callback) => {
	console.log("Task 2️⃣");
	callback();
};

//taskTwo(taskOne);

function t1() {
	console.log("t1 completed");
}

function t2(callback) {
	console.log("t2 completed");
	callback();
}

t2(() => {
	console.log("this is anonymous function");
});

// now task 2 will be logged immediately and taskOne will be logged after 2 seconds
// setTimeout(taskOne, 2000);
// taskTwo();

// First we take example of
const message = function () {
	console.log("this function will be called back after 3 secs");
};

// In this example we are waiting for 2 sec and after that we are calling message function so its an example of callback function.

//setTimeout(message, 2000);

// we can directly pass the message function body in setTimeout function without giving it any name. The function without any name is called callback function.
