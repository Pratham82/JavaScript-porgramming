class EventObserver {
	//Initializing an empty array
	constructor() {
		this.observers = [];
	}

	/*
    * For subscribe :
    1. Here we are creating a functions where we will pass function as parameter
    2. We will add the function inside the observer and once its added we will log the function name 

    * For Unsubscribe:
    1. In this function we are passing a function and filtering out the those function which is same to the callback function 
   

    * Fire:
    1. This function will loop through entire observers array and call the the item i.e is functions in out case

    */
	subscribe(fn) {
		this.observers.push(fn);
		console.log(`You are now subscribed to ${fn.name}`);
	}
	unsubscribe(fn) {
		this.observers = this.observers.filter((item) => item != fn);
		console.log(`You are now unsubscribed from ${fn.name}`);
	}
	fire() {
		this.observers.map((item) => item.call());
	}
}

// Instantiating EventObserver

const clickObsNew = new EventObserver();

//* For milliseconds

document.querySelector(".sub-ms").addEventListener("click", function () {
	clickObsNew.subscribe(getCurMilliseconds);
});
document.querySelector(".unsub-ms").addEventListener("click", function () {
	clickObsNew.unsubscribe(getCurMilliseconds);
});
document.querySelector(".fire").addEventListener("click", function () {
	clickObsNew.fire(getCurMilliseconds);
	console.log(clickObsNew.observers.length); // here we can see the subscribed function counts it will get empty once we unsubscribe
});

//* For Seconds

document.querySelector(".sub-s").addEventListener("click", function () {
	clickObsNew.subscribe(getCurSeconds);
});
document.querySelector(".unsub-s").addEventListener("click", function () {
	clickObsNew.unsubscribe(getCurSeconds);
});
document.querySelector(".fire").addEventListener("click", function () {
	clickObsNew.fire(getCurSeconds);
	console.log(
		`Length of elements in observers ${clickObsNew.observers.length}`
	); // here we can see the subscribed function counts it will get empty once we unsubscribe
});

//* Click handlers
const getCurMilliseconds = function () {
	console.log(`Current MilliSeconds: ${new Date().getMilliseconds()}`);
};
const getCurSeconds = function () {
	console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
