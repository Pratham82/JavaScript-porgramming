/*
 * Async await
 * 1. Introduced in ES7 2017, works in chrome, but if you want to use this feature in your code you should compile ES7 to ES5, it can be done by webpack and babel
 */

function functionNormal() {
	return "Hello 👋 this is normal function";
}

console.log(functionNormal()); //Hello 👋

//* Using async

//* We will add async to the beginning of the function and just doing that make this function returns a promise

async function functionAsync() {
	return "Hello 👋 this is async function";
}

console.log(functionAsync());
/*
Promise {<resolved>: "Hello 👋"}
[[PromiseStatus]]: "resolved"
[[PromiseValue]]: "Hello 👋"
*/

// So we can handle this function like we handled promises.
functionAsync().then((response) => console.log(response)); //Hello 👋

//* If we do something asynchronous at the start we can use await to wait until the promise is resolved

//* Using async await

async function functionAsyncAwait() {
	// We have to wait until thats resolved

	const promise = new Promise((resolve, reject) => {
		// This statement will be returned after 2 seconds
		setTimeout(
			() => resolve("Hello 👋 this is Async Await function"),
			2000
		);
	});

	// Errors
	const err = true;

	if (err) {
		// For catching an error we will use promise.reject
		await Promise.reject(new Error("Something went wrong"));
	} else {
		// Take new variable and store the promise with await keyword in it
		const response = await promise; // Wait until the promise is resolved

		//return the response
		return response;
	}
}

functionAsyncAwait()
	.then((result) => console.log(result))
	.catch((err) => console.log(err));

//*  Async await with fetch

async function getUsers() {
	//Since we are using await we dont have to use two .then()

	// Here we are waiting for the fetch call
	const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

	// But her we can store the promise directly in a variable and return it
	// Here we only proceed if the promise is resolved
	const data = await response.json();

	//* Here we are using await keyword in the place of .then() returning the data that we want
	// We only proceed if the 2nd promise is resolved
	return data;
}

getUsers().then((data) => console.log(data)); //(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

async function getUsersConscised(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

getUsersConscised(`https://jsonplaceholder.typicode.com/users`).then((data) =>
	console.log(data)
);

/*
 * Steps:
 * 1. Write async in the start of the function
 * 2. We will await for thr response from the fetch and, store it another variable
 * 3. Wait for the promise to be resolved then store and convert the response in JSON format
 * 4. Only if the 2nd promise it resolved we will return the data
 */
