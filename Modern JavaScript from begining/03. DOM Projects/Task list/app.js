// Defining variables

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
	//Add task form
	form.addEventListener("submit", addTask);
}

// Add task function
function addTask(e) {
	if (taskInput.value === " ") {
		alert("Please enter some task");
	}
	// Create li element
	const li = document.createElement("li");

	// Add class to li for styling
	li.className = "collection-item";

	// Create text node and append child to li
	li.appendChild(document.createTextNode(taskInput.value));

	// Create new link element
	const link = document.createElement("a");

	// Add class to the link
	link.className = "delete-item secondary-content";

	//Add icon to the link
	link.innerHTML = '<i class="fa fa-remove"></i>';

	console.log(li);
	// Append li to ul
	taskList.appendChild(li);

	// Append the link  to li
	li.appendChild(link);

	// Clear the input, every time when we add the task
	taskInput.value = "";

	e.preventDefault();
}
