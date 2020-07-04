/*
 * Promises are ES6 standard and alternative to callbacks.
 * They alternate way of handling async operations.
 * They are called promises because while they are handling async operations, they are promises to do something when that operation si finished
 * We handle a promise response with .then()m inside. SomeFunction().then() and inside .then() we will do when the promise is complete
 */

const posts = [
	{ title: "post 1", body: "this is body for post 1" },
	{ title: "post 2", body: "this is body for post 2" },
	{ title: "post 3", body: "this is body for post 3" },
];

// function using callbacks

// function createPost(post, callback) {
// 	setTimeout(() => {
// 		posts.push(post);
// 		callback();
// 	}, 1000);
// }

//* We can rewrite the function using ES6 promises
function createPost(post) {
	// We don't have to pass in the callback inside the function. we just have to return a promise
	// We will use resolve when we are done with what we are doing
	// We will use reject when we get an error while performing a task
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			posts.push(post);
			const error = true;
			if (!error) {
				resolve();
			} else {
				reject("Oops something went wrong 😲");
			}
		});
	}, 1000);
}

// Function for injecting the posts into DOM
function getPost() {
	setTimeout(function () {
		let outputDiv = document.querySelector("#output");
		let op = "";
		posts.map((i) => (op += `<li>Title: ${i.title} post: ${i.body}</li>`));
		outputDiv.innerHTML = op;
	}, 2000);
	return posts;
}

//createPost({ title: "post4", body: "test" }, getPost);

// We will use .then to resolve a promise and in (.then) we will call getPost function

createPost({ title: "post4", body: "testing article" })
	.then(getPost)
	.catch(function (err) {
		console.log(err);
	});
