// Event Listener

clearBtn = document.querySelector(".clear-tasks");

// Syntax: Element.addEventListener.('event', function{})
// clearBtn.addEventListener("click", (e) => {
// 	console.log("button clicked using anonymous function");
// 	e.preventDefault(); // This will prevent the default behavior (stops going to the link)
// });

// Creating a named function on with EventListener
clearBtn.addEventListener("click", onClick1);
function onClick1(e) {
	// console.log("button clicked using onClick1 function");
	let val;
	val = e;

	// Event target
	val = e.target; //here the target element is a tag
	val = e.target.className; //clear-tasks btn black
	val = e.target.innerText; //CLEAR TASKS
	val = e.target.classList; //DOMTokenList(3) ["clear-tasks", "btn", "black", value: "clear-tasks btn black"]

	// Event types
	val = e.type; //click

	// Timestamp
	val = e.timeStamp; //1606.965000013588

	// Coordinate of events relative to window
	val = e.clientY; //552px
	val = e.clientX; //191px

	//offset values
	val = e.offsetY; //552px
	val = e.offsetX; //191px

	console.log(val);

	// e.preventDefault();
}
