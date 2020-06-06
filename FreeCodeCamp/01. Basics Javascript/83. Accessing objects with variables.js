// Basic JavaScript: Accessing Object Properties with Variables

/*
Another use of bracket notation on objects is to access a property which is stored 
as the value of a variable. This can be very useful for iterating through an
 object's properties or when accessing a lookup table.
*/




//Use the playerNumber variable to look up player 16 in testObj using bracket 
//notation. Then assign that name to the player variable.



// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber = 16;       // Change this line
var player = testObj[playerNumber];   // Change this line
console.log('player:', player)




//* Practice------------------------------------------
//* Example 1
// property's name is collected dynamically during the program execution
var obj1 = {
    propName : "Prathamesh"
}

function show_prefix(str){
    s = "prop"
    return s + str
}

//This becomes the name of the property similar to Obj1

property_1 = show_prefix("Name")
console.log('property_1:', property_1) 
//OP property_1: propName+

console.log(obj1[property_1]);

//console.log(obj1[prop1]);

var obj2 ={
  firstName :"John",
  LastNme : 'Doe',
  "Address": 'DC'
}
//----------------------------------------------


// Accessing property with object's property name

//* Example 2
firs_name_var = obj2['firstName']
console.log('firs_name_var:', firs_name_var)

last_name_var = obj2['LastNme']
console.log('last_name_var:', last_name_var)

Add_var = obj2['Address']
console.log('Add_var:', Add_var)

//--------------------------------------------

//* Example 3
var Dogs = {
  Ghost : "Husky",
  Fred: "Bulldog",
  Houndoom: 'German Shepherd',
}

myDog1 = "Ghost";
Dog1_breed = Dogs[myDog1]
console.log('Dog1_breed:', Dog1_breed)

myDog2 = Dogs['Fred']
console.log('myDog2:', myDog2)
