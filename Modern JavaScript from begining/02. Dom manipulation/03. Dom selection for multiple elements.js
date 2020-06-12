//* Fetching multiple elements

var items = document.getElementsByClassName("collection-item");
console.log(items);
console.log(items[0]);
items[0].style.background = "lightblue";
items[4].style.background = "orange";

const list_items = document
	.querySelector("ul")
	.getElementsByClassName("collection-item");
console.log(list_items);

//* getElementsByTagName
let list = document.getElementsByTagName("li");
list[0].style.color = "green";
list[0].textContent = "List item 1";

//* Convert HTML collection to array

list = Array.from(list);
console.log(list);

//list.reverse();

list.forEach((li, i) => {
	console.log(li);
	li.textContent = `Task ${i}`;
});

//* document.querySelectorAll()

//* Creating node list
let listNew = document.querySelectorAll("li");
console.log(listNew);

listNew.forEach((li, i) => {
	li.textContent = `new Task # ${i}`;
});

// Modifying odds and even elements
//For nodeList We don't have to convert the tag name to array for iterating over it , it by default works like an array.
listOdd = document.querySelectorAll("li:nth-child(odd)");
listEven = document.querySelectorAll("li:nth-child(even)");

listOdd.forEach((li) => {
	li.style.background = "#ccc";
	li.style.color = "blue";
});

listEven.forEach((li) => {
	li.style.background = "#ffc";
	li.style.color = "grey";
});
