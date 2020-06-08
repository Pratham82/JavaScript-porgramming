/*
What is DOM?
-> Document object model
-> Tree of nodes/elements created by the browser
-> JS can be used to read/write/manipulate to the DOM
-> Object oriented representation
*/

let val

val = document
val = document.all         // All elements in the HTML will be stored in val
val = document.all[0]      //This will give the html tag
val = document.all.length  //This will give amount elements present in the DOM

// Accessing individual elements
val = document.body
val = document.head
val = document.doctype
val = document.domain  
val = document.URL
val = document.characterSet
val = document.contentType

//Accessing forms
val = document.forms            // Returns collection of forms
val = document.forms[0]         // Returns 1st form in the document 
val = document.forms[0].id      // Returns id of the form
val = document.forms[0].method  // Returns method of the form
val = document.forms[0].action  // Returns the action file name

// Accessing links
val = document.links
val = document.links[0].id
val = document.links[0].className
val = document.links[0].classList

// Accessing images
val = document.images  

// Accessing scripts
val =  document.scripts
val =  document.scripts[0]
val =  document.scripts[0].getAttribute('src')

// Iterating over scripts
let scripts = document.scripts

// For iterating we have to convert our dom object into array
scriptArr = Array.from(scripts)

scriptArr.forEach(function(s){
    //console.log(s);
    console.log(s.getAttribute('src'));
})


console.log(val);