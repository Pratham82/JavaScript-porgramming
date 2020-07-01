/*
1. Both the browser and node.js are always running a single threaded event loop to run your code.

2. On first round it will run all of your synchronous code. But it may also queue up an async events to call back later. 

3. You can say that here is a function that I need to run but first I need get some data from the network. (Which wil be identified by getData(callback) function)

4. The event loop continuous do its work while we get data and perform this task in separate thread pool. And then at some point in future getData() will finish, and let the event loop know that its ready to be called back.

5. If its a macro task like(setTimeOut or setInterVal) it will be executed on the next event loop. but if its a micro task(like a fulfilled promise) then it will be called back before the start of the next event loop

*/

console.log("Synchronous line 1 🌯");

setTimeout((i) => console.log("timeout line 2 🍅"), 0);

Promise.resolve().then((i) => console.log("Promise line 3 🐻"));

console.log("Synchronous line 4 🍔");

/*
output: 

1st line is logged right away because it s running on the main thread
2nd line will be queued for the future task
3rd line the promise is queued to run in the micro task queue, immediately after the current task
4th line is executed right away

Even though the set timeout callback was queued up before the promise, the promise will be executed first because its a micro task and because of the priority of micro task queue

Synchronous line 1 🌯
Synchronous line 4 🍔
Promise line 3 🐻    
timeout line 2 🍅   
*/

/*
* Promises

* Promise based APi working
 
*1. fetch is a browser based APi but its also available in node vid the node fetch library, it allows us to hit an http endpoint have that response return to us as the promise of the response. 

*2. Fetching data from a remote server is going to be async so we can queue up the promise then provide it with a callback to map it to JSON. We can chain the promises. Mapping to JSON is also a promise, so we can return that promise in original 'then' callback and in the next one we can have actual user data as a plain JS object
*/

import fetch from "node-fetch";

const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");

promise
	.then((res) => res.json())
	.then((todo) => {
		throw new Error("uh oh");
		return todo;
	})
	.then((todo) => console.log("😛", todo.title))
	.catch((err) => console.error("😭", err));

console.log("🥪 Synchronous");
