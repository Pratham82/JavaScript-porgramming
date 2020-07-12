//*  Individual selectors
const tasks = document.getElementById("task-title"); //Setting the document value in JS variable

//*  getElementByID()
console.log(document.getElementById("task-title"));

//*  Get things from elements
console.log(document.getElementById("task-title").id);

//* Change styling
document.getElementById("task-title").style.background = "lightblue";
tasks.style.color = "#fff";
tasks.style.padding = "5px";
//t1.style.display = "none"; // This will make our element disappears

//* Change content
tasks.textContent = "Tasks changed textContent";
tasks.innerText = "Tasks changed using InnerText";
tasks.innerHTML = "<span style='color:blue'>Tasks list</span>";

//* Query selector (latest method)
//Accessing class , id and tag
console.log(document.querySelector("#task-title")); // Fetching ID
console.log(document.querySelector(".card-title")); //Fetching class
console.log(document.querySelector("h5")); //If there are multiple H5s it will return 1st H5

document.querySelector("li").style.color = "red"; //Affects only 1st element
document.querySelector("ul li").style.color = "blue"; //Accessing nested element

//* Accessing last element
document.querySelector("li:last-child").style.color = "red";

//* Accessing nth element
document.querySelector("li:nth-child(3)").style.background = "grey";
document.querySelector("li:nth-child(4)").textContent = "New item ****";

//*  Changing every odd / even child's property
// Only first even and odd element will get affected because querySelector affects individual element
document.querySelector("li:nth-child(odd)").textContent = "odd";
document.querySelector("li:nth-child(even)").textContent = "even";
