/*
* Singleton pattern: 

1. Singleton pattern which is actually a manifestation of the module pattern a singleton object is an immediate anonymous function and it can only return one instance of an object at a time.

2. So repeated calls to the constructor will just return the same instance and like the module pattern it maintains a private reference which nothing from the outside can access.

*/

const Singleton = (function () {
	let instance;
	function createInstance() {
		// Creating new String obj
		// const str = new Object("New String created 😄");
		// return str;
		// We can also create a new object

		const obj = new Object({ name: "Jake" });
		return obj;
	}

	return {
		getInstance: function () {
			if (!instance) {
				instance = createInstance();
			}
			return instance;
		},
	};
})();

const inst1 = Singleton.getInstance();
const inst2 = Singleton.getInstance();

console.log(inst1); //{name: "Jake"}
console.log(inst2); //{name: "Jake"}

console.log(inst1 === inst2); //true
