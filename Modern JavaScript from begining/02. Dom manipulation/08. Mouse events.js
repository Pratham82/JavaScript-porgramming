// Mouse events

const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

console.log(clearBtn);
console.log(card);
console.log(heading);
/*
// Click
clearBtn.addEventListener("click", runEvent);

//Double click
clearBtn.addEventListener("dblclick", runEvent);

// MouseDown (Event trigger when we click and hold the button)
clearBtn.addEventListener("mousedown", runEvent);

// MouseUp (Event triggers when the button is released after clicking)
clearBtn.addEventListener("mouseup", runEvent);

// logs when the event is executed on main element
// Mouse enter
card.addEventListener("mouseenter", runEvent);

// Mouse leave
card.addEventListener("mouseleave", runEvent);

// logs when the event is executed on child element
// Mouse over
card.addEventListener("mouseover", runEvent);

// Mouse out
card.addEventListener("mouseout", runEvent);
*/

// Mouse move (triggers on any move inside the element )
card.addEventListener("mousemove", runEvent);

// Event handler
function runEvent(e) {
	console.log(`Event type: ${e.type}`);
	heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY} `;
	document.body.style.background = `rgb(${e.offsetX},${e.offsetY},60)`;
}
