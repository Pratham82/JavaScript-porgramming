// Traversing DOM

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

console.log(list);
console.log(listItem);

// Get child nodes for

let val;

val = list.childNodes;
val = list.childNodes[0]; // #text
val = list.childNodes[0].nodeName; // #text
val = list.childNodes[0].nodeType; // 3

/*
1 - Element
2 - Attribute (deprecated)
3 - Text node
8 - comment
9 - Document itself
10 - Doctype

*/

/*
This also contains the line breaks. for example text at index 0,2,3 and so on 
0: text
1: li.collection-item
2: text
3: li.collection-item
4: text
5: li.collection-item
6: text
7: li.collection-item
8: text
9: li.collection-item
10: text
length: 11
__proto__: NodeList
*/

val = list.children; // This does not contain the lin breaks.and return all the elements inside ul
val = list.children[0];
//val = list.children[0].textContent = "new task added";

// Children of children
// list.children[3].children[0].class = "test-link"; adds new ID to the li
val = list.children[3].children[0]; //Return the link present on the li element

val = list.firstChild; //#text
val = list.firstElementChild; // <li class="collection-item">new task added</li>

val = list.lastChild; //#text
val = list.lastElementChild; // <li class="collection-item">new task added</li>

// Count child element
val = list.childElementCount; // 5

//Get parent element
val = listItem.parentNode; // <ul class="collection">..</ul>
val = listItem.parentElement; // <ul class="collection">..</ul>
val = listItem.parentElement.parentElement; // <div class="card-action">.</div>

// Get next sibling
val = listItem.nextElementSibling; //#text
val = listItem.nextElementSibling.nextElementSibling; // #text
val = listItem.previousElementSibling; //null

console.log(val);
