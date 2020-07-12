//  Replace elements

// Create element
let newHeading = document.createElement("h2");

// Adding same id as the old title
newHeading.id = "task-title";

//Changing the heading text
newHeading.appendChild(document.createTextNode("new heading m1"));
newHeading.textContent = "New heading m2";

// Get the old heading
const oldHeading = document.querySelector("#task-title");

// Get parent
const cardAction = document.querySelector(".card-action");

//Replace the heading
cardAction.replaceChild(newHeading, oldHeading);

// Remove elements

const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

// Remove list items

lis[0].remove(); //Removes first element from the ul

//Remove child node
list.removeChild(lis[3]);

//------------------------------------------------------------------------------

// Classes and attributes
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

console.log(cardAction);
console.log(link);

let val;

val = link.className;
val = link.className; //OP: delete-item secondary-content
let valClass = link.classList; //OP: DOMTokenList(2) ["delete-item", "secondary-content", value: "delete-item secondary-content"]

//Adding new class in the list of classes
link.classList.add("new-class-test");

// Removing class form the list of classes
link.classList.remove("new-class-test");
val = link.className; //OP: delete-item secondary-content

//------------------------------------------------------------------------------

// Attributes

val = link.getAttribute("href");
val = link.setAttribute("href", "https://github.com");
val = link.hasAttribute("href"); //true

// Adding new attribute
link.setAttribute("title", "Google");

//Remove attribute
link.removeAttribute("title");

console.log(val);
