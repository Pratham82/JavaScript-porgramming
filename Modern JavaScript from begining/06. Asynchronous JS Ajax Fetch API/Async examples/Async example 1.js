// Async await boils down to syntactic sugar(convenient code) and makes it more readable. So we can read our async code as sync code

/*
 * This is a normal function, returns nothing but if we add async keyword in front of it, it will return promise of nothing. So whatever gets returned inside this function will be a promise of that value.

 * In this function user can pass in any name of the fruit and function will resolve to the value of fruit emoji from this object.

 * If we didn't use the async keyword we can write this function by returning a promise that resolves to the value. 

 * When we use the async keyword it takes the return value and automatically resolves it as a promise. It also sets up context for you to use the await keyword.

 * The real advantage of an async function comes with the await keyword to pause the execution of the function. 

*/
export const getFruit = async (name) => {
	const fruits = {
		apple: "🍎",
		banana: "🍌",
		peach: "🍑",
		kiwi: "🥝",
	};
	return fruits[name];
};

//console.log(getFruit("apple"));

//Print statement for getting promise
getFruit("apple").then(console.log);

// async + await
/* 
* Instead of chaining multiple then callbacks we can just have a promise resolved to the value of  variable.

* await: await is like saying pause the execution of this function until the get fruit promise resolves to a value at which point we can use it as the variable a, and then we will move on to the next line. In the end we wil return together them as an array

* It is harder to share result values between multiple steps in the promise chain. but async await will solve this problem
 */

/*
 * In the current example we are failing to run the code concurrently because we are first waiting to get the value of apple , and then banana. But we can get both the values at the same time.

 * You only need to await the one thing after another if the second value is dependent on the first value.

 *  For solving this we return both the values and as we know the output is a promise we can add both the promises to promise.all

 * This will tell all the promises in the array to run concurrently and resolved value be at that index in the array

 * We should not pause a function unnecessarily. SO rather than awaiting multiple promises we can add all the promises to an array and await the promise.all call. We can increase the execution time of the current function.

 * We can also add error handling, instead of chaining a catch callback to our promise chain we can just wrap our code in a try catch block

 * If we add an error in then middle of the program we can catch the error using catch block. We can either catch the error or throw another error, where we can catch the error and return the value.
 
 * Our decision here will dictate the control flow for the consumer of this promise. If we return a value then its basically ignoring the error and     providing some replacement value so the consumer of the promise wont get an error instead they get a resolved value inside of the then callback
 */
const makeSmoothie = async () => {
	//before
	// const a = await getFruit("apple");
	// const b = await getFruit("banana");
	// return [a, b];

	//after
	try {
		const a = getFruit("apple");
		const b = getFruit("banana");
		const smoothie = Promise.all([a, b]);
		//throw "broken ❗️";

		return smoothie;
	} catch (err) {
		console.log(err);
		return `running smoothly`;
		throw `Its broken 💩`;
	}
};

const badSmoothie = async () => {
	try {
		const a = getFruit("apple");
		const b = getFruit("banana");
		const smoothie = Promise.all([a, b]);
		//throw "broken ❗️";

		return smoothie;
	} catch (err) {
		console.log(err);
		return `running smoothly`;
		throw `Its broken 💩`;
	}
};

badSmoothie()
	.then((val) => console.log({ val }))
	.catch((err) => console.log({ err }));

badSmoothie().then(console.log);
type = "module";
