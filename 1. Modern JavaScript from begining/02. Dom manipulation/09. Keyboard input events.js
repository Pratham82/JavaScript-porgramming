const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
const select = document.querySelector("#select-list");
/*
form.addEventListener("submit", runEvent);
taskInput.addEventListener("keydown", runEvent);
taskInput.addEventListener("keyup", runEvent); //performed when the key is released
taskInput.addEventListener("keypress", runEvent);
taskInput.addEventListener("focus", runEvent); //Runs when the input os selected and clicked on
taskInput.addEventListener("blur", runEvent); // Runs when the cursor is moved out from the input or we clicked somewhere else on the screen
taskInput.addEventListener("cut", runEvent); // Triggers after cutting text from input
taskInput.addEventListener("paste", runEvent); // Triggers after pasting text from input
taskInput.addEventListener("input", runEvent); //Triggers after any event i.e cut, copy, paste.
*/

select.addEventListener("change", runEvent); // USed for select list

function runEvent(e) {
	console.log(`Action type: ${e.type} `);
	console.log(e.target.value);
	//heading.innerText = e.target.value;
	//e.preventDefault(); //This will stop the page from getting redirected
	//console.log(`Task: ${taskInput.value}`);
}

// For clearing input value
//taskInput.value = "";
