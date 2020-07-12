const tick = Date.now();
const log = (v) => console.log(`${v} \nElapsed: ${Date.now() - tick}ms`);

//* The while loop inside code blocker will run billion times. If we run this on the main thread, it will block all other code from executing until billion loops are done
const codeBlocker = () => {
	// Blocker version 1
	// let i = 0;
	// while (i < 1000000000) {
	// 	i++;
	// }
	// return "⛔ Billion loops";
	//
	//
	//
	//Blocker version 2
	//* Now we are wrapping the loop inside a promise so we can get it off from the main thread and execute it as a micro task. And we have it resolved when that value when done.
	// return new Promise((resolve, reject) => {
	// let i = 0;
	// while (i < 1000000000) {
	// 	i++;
	// }
	// resolve("⛔ Billion loops");
	// });
	//
	//
	//
	//Blocker version 3
	//* To ensure that all of our sync code runs fast as possible we will refactor our code once again to make it promise resolve and we run our while loop in that resolved promise's callback.
	//* B y putting the code inside of this resolved promise we can be guaranteed that it will be executed after all the sync code in the current macro task has completed

	return Promise.resolve().then((v) => {
		let i = 0;
		while (i < 1000000000) {
			i++;
		}
		return "⛔ Billion loops";
	});
};

log("Synchronous line 1 🍔");

//log(codeBlocker());

//Print statement for promise
codeBlocker().then(log);

log("Synchronous line 2 🍔");

/*

* Output Blocker 1:
* With blocker version 1 we can see that it takes 1091 ms to finish the while loop and the "Synchronous line 2 🍔" will run just after the codeBlocker. But our script is frozen until the while loop is completed

Synchronous line 1 🍔 
 Elapsed: 0ms
⛔ Billion loops 
 Elapsed: 1091ms
Synchronous line 2 🍔 
 Elapsed: 1092ms

 
* Output Blocker 2:
* We might think that we are adding the loop inside the promise so it will execute off the main thread. but the actual creation of the promise and the while loop is still happening on the main thread. Only resolving the value is happened as a micro task.
* 1st sync line will logged right away, 2nd sync line should too, but there is still 1020ms delay, because while loop is still blocking on the main thread.

Synchronous line 1 🍔 
Elapsed: 0ms
Synchronous line 2 🍔 
Elapsed: 1020ms       
⛔ Billion loops
Elapsed: 1022ms


* Output Blocker 3:
* Here the sync line will log right away and finally our promise resolves after 1002ms. So the sync code is not waiting for the while loop.
Synchronous line 1 🍔 
Elapsed: 0ms
Synchronous line 2 🍔 
Elapsed: 11ms
⛔ Billion loops 
Elapsed: 1002ms 
*/
