/* 
Event bubbling: 
1. It occurs when we target child element and the dom bubbles up to the parent element.The event bubbles up from parent to parent until it is handled, or until it reaches the document object.
2. The bubbles event property returns a Boolean value that indicates whether or not an event is a bubbling event.
3.  Triggers on a mouse click on a button, the same event is also triggered on all of that element’s ancestors

Event delegation: event delegation is a simple technique by which you add a single event handler to a parent element in order to avoid having to add event handlers to multiple child elements.

*/

document.querySelector(".card-title").addEventListener("click", () => {
	console.log("card title clicked");
});
document.querySelector(".card-content").addEventListener("click", () => {
	console.log("card content clicked");
});
// document.querySelector(".card").addEventListener("click", () => {
// 	console.log("card clicked");
// });
// document.querySelector(".col").addEventListener("click", () => {
// 	console.log("col clicked");
// });

/*
Event delegation
1. DOM event delegation is a mechanism of responding to ui-events via a single common parent rather than each child, through the magic of event "bubbling" (aka event propagation).

2. Event bubbling provides the foundation for event delegation in browsers. Now you can bind an event handler to a single parent element, and that handler will get executed whenever the event occurs on any of its child nodes (and any of their children in turn). This is event delegation.

3. We put the event listener on the parent element and it goes down from parent to child

4. It is also used when we dynamically add any elements in the dom with JavaScript

5. Putting the listener on the parent of what you are looking for and putting the condition to find the target element  using e.target
*/

// This will work only for the first li element in the ul
//document.querySelector(".delete-item").addEventListener("click", deleteItem);

//Now the action is triggered if we click anywhere in body
document.querySelector("body").addEventListener("click", deleteItem);
function deleteItem(e) {
	// This will give us the target element information which is clicked
	console.log(e.target);

	//Targeting specific element in body now the line will be logged only if we click the  cross button

	// if (e.target.className === "fa fa-remove") {
	// 	console.log("delete task clicked");
	// }

	// Better way to do the same using classList
	if (e.target.parentElement.classList.contains("delete-item")) {
		console.log("delete task clicked");

		// Deleting element
		// target (i tag), first ParentElement(a tag), second parent element(li tag) In this way we can delete the li tag
		e.target.parentElement.parentElement.remove();
		// But the li items will be reappear because we are just manipulating the data not saving it in db
	}
}
