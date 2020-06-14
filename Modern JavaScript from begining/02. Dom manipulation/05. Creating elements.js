// Creating elements in JS and adding them into HTML

// Creating list element
let li = document.createElement("li");

//Adding class Name to the list
li.className = "collection-item";

//Adding ID Name to the list
li.id = "new-id";

// Adding attribute to li
li.setAttribute("title", "New title");

//Adding style
li.style.background = "yellow";

// Create text node and append text
li.appendChild(document.createTextNode("New text for new li element "));

//Create link element and adding class name
let link = document.createElement("a");
link.className = "delete-item secondary-content";

// Add icon HTML to link
link.innerHTML = '<i class="fa fa-remove"></i>';

//Adding li to ul as a child
document.querySelector("ul.collection").appendChild(li);

// Adding link to li

li.appendChild(link);

console.log(li);
console.log(link);
