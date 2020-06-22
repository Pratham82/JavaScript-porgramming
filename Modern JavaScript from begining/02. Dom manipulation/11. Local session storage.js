/*
Local storage: Persists even after the browser window is closed
Session storage: Limited till the session and wiped out after session/br is closed

*/

// Set local storage item
localStorage.setItem("first_name", "John");
localStorage.setItem("last_name", "Doe");

// // Session  storage
// sessionStorage.setItem("name", "Jake");

// Remove from storage
// localStorage.removeItem("first-name");

// Remove all value
// localStorage.clear();

//Get from local storage
let name = localStorage.getItem("first_name");
console.log(`My name is ${name}`);

document.querySelector("form").addEventListener("submit", (b) => {
	const value = document.getElementById("task").value;

	let tasks;
	if (localStorage.getItem("tasks") === null) {
		tasks = [];
	} else {
		// We will use JSON.parse to covert string into an object
		tasks = JSON.parse(localStorage.getItem("tasks"));
	}

	// Now every task will be added into the tasks array as a string element
	tasks.push(value);

	// For converting the object into string we will use JSON.stringify
	localStorage.setItem("tasks", JSON.stringify(tasks));
	alert("Task added");
	b.preventDefault();
});

// Converting our string into array (because browser only stores strings as data format)
const tasks1 = JSON.parse(localStorage.getItem("tasks"));
tasks1.map((item) => {
	console.log(item);
});
