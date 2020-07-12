/*

* Observer pattern

1. Observer pattern which allows us to subscribe and unsubscribe to certain events or certain functionality.

2. So it gives us a subscription model.

3. It can be used to notify the dorm of certain elements to be updated.
*/

function EventObserver() {
	this.observers = [];
}
EventObserver.prototype = {
	subscribe: function (fn) {
		this.observers.push(fn);
		console.log(`You ar now subscribed to ${fn.name}`);
	},
	unsubscribe: function (fn) {
		/*
        Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigning the list of observers
        */
		this.observers = this.observers.filter((item) => {
			if (item != fn) {
				return item;
			}
		});
		console.log(`You are now unsubscribed from ${fn.name}`);
	},
	fire: function () {
		this.observers.map((item) => item.call());
	},
};

const clickObs = new EventObserver();

//* For Milliseconds

//* Event listeners
document.querySelector(".sub-ms").addEventListener("click", () => {
	clickObs.subscribe(getCurMilliseconds);
});

document.querySelector(".unsub-ms").addEventListener("click", () => {
	clickObs.unsubscribe(getCurMilliseconds);
});

document.querySelector(".fire").addEventListener("click", () => {
	clickObs.fire();
});

//* Click handler
const getCurMilliseconds = function () {
	console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
};

//* For Seconds

//* Event listeners
document.querySelector(".sub-s").addEventListener("click", () => {
	clickObs.subscribe(getCurSeconds);
});

document.querySelector(".unsub-s").addEventListener("click", () => {
	clickObs.unsubscribe(getCurSeconds);
});

//* Click handler
const getCurSeconds = function () {
	console.log(`Current seconds: ${new Date().getSeconds()}`);
};
