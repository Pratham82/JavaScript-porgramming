/*
 * If you are inside a specific scope(an object or function) "this" means whatever object that you are in
 */

//************** "this" inside global scope ***************
"use strict";
// house
// * "this" here means global scope means we are in a window scope
this.table = "window table";
console.log(window.table); //window table

// It is still in the global scope because we are using this on the window object
this.garage = {
	table: "garage table",
	cleanTable() {
		//* Here "this" refers to the garage
		console.log(`Cleaning ${this.table}`);
	},
};

//* here "this" refers to window object where and the garage is accessible to window obj
console.log(this.garage.table);

// Because it is available globally we can use it with window object as well
console.log(window.garage.table); //garage table

//************ "this" inside an object *************

let joesRoom = {
	table: "Joe's table",
	//* here this refers to joe's room
	cleanTable() {
		//* Here "this" refers to the newRoom
		console.log(`Cleaning ${this.table}`);
	},
};

// for accessing table inside the joeRoom we cannot access it by "this" keyword as before

//console.log(this.joesRoom.table);
//* It will cause an error because the table is a private property of joe we cannot access it globally
/*
 Cannot read property 'table' of undefined
    at this.js:31
(anonymous) @ this.js:31
 */

//* For accessing property inside joesRoom we have to use objectname.propname because we are using private property of joesRoom

console.log(joesRoom.table); //Joe's table

//********** "this" inside a method *************

let newRoom = {
	table: "table in a new room",
	cleanTable() {
		//* Here "this" refers to the newRoom
		console.log(`Cleaning ${this.table}`);
	},
};

newRoom.cleanTable(); //Cleaning table in a new room
joesRoom.cleanTable(); //Cleaning Joe's table

//* We can access global variable with or without "this"
this.garage.cleanTable(); //Cleaning garage table
garage.cleanTable(); //Cleaning garage table
window.garage.cleanTable(); //Cleaning garage table

//******* "this" inside a function ******

// We want to use cleanTable function on table2
// For doing this we can use call function
this.table2 = "Global table";

const cleanTableNew = function (soap) {
	// "this refers to window object "
	console.log(`Cleaning ${this.table} using ${soap}`);
};
//console.log(cleanTableNew()); //Cleaning window table

//* Execute the call clea as if its a method of this
//* We can also pass in the parameters
//cleanTableNew.call(this, "Some soap"); //but it will not work we will get an error

//* We can use call for using any method with any object
// As we can check cleanTable2 is not present inside any method but still we can use the method with "call"

cleanTableNew.call(this.garage, "soap1"); //Cleaning garage table using soap1
cleanTableNew.call(joesRoom, "soap and 🚿"); //Cleaning Joe's table using soap and 🚿

cleanTableNew.call(newRoom, "soap 3 "); //Cleaning garage table using soap1

//* If we try to access with global variable it will return undefined
cleanTableNew.call(table2, "soap X"); //Cleaning undefined using soap X

//*** This inside inner function
const cleanTable3 = function (soap) {
	//* Solution 1
	// Using this inside an inner function
	//* this2 basically refers to the outer "this" which is still accessible
	let this2 = this;
	const cleanTableInsides = function (_soap) {
		console.log(`Cleaning ${this2.table} using ${_soap} its a new way`);
	};
	cleanTableInsides(soap);
};

//cleanTable3.call(this.garage, "soap");
/*
We will get an error
Cannot read property 'table' of undefined
because we are using this inside an inner function 
*/

//* Solution 1: Instead of using "this"  inside an inner function we can take "this" variable value in an outer function scope and store it in another variable in that way we don't have to use "this" inside an inner function

// Now it will work
cleanTable3.call(this.garage, "soap"); //Cleaning garage table using soap its a new way

//* Solution 2 and 3: we can use call/ bind method when we are calling an inner function, But these two ways are not suggested

const cleanTable4 = function (soap) {
	// Using this inside an inner function
	const cleanTableInsides = function (_soap) {
		console.log(`Cleaning ${this.table} using ${_soap} its a 4th way`);
	};

	//* Solution 2 (using call method)
	//cleanTableInsides.call(this, "soap new");

	//* Solution 3 (using bind method)
	cleanTableInsides.bind(this)("soap new");
};

cleanTable4.call(this.garage, "soap");
//Cleaning garage table using soap new its a 4th way
//Cleaning garage table using soap new its a 4th way

//* Solution 4:
//* We can do the same with arrow functions
const cleanTable5 = function (soap) {
	// Using this inside an inner function
	//* Using arrow function
	//* Arrow function will take "this" from the outer scope(from outer function in current case) and use that
	const cleanTableInsides = (_soap) => {
		console.log(
			`Cleaning ${this.table} using ${_soap} using arrow function`
		);
	};
	cleanTableInsides(soap);
};

cleanTable5.call(this.garage, "soap");
// Cleaning garage table using soap using arrow function
cleanTable5.call(joesRoom, "soap");
// Cleaning Joe's table using soap using arrow function

//***** this inside a constructor *****
//* Instead of creating object again and again we can use constructor for creating object

let createRoom = function (name) {
	this.table = `${name}'s table`;
};

// For creating object we will use new keyword
let john = new createRoom("John");
let jake = new createRoom("Jake");

cleanTable5.call(john, "soap");
//Cleaning John's table using soap using arrow function

cleanTable5.call(jake, "soap");
//Cleaning Jake's table using soap using arrow function

//* Instead of using the call method what we can add prototype of cleanTable inside the createRoom so when every time we create an object from createRoom we will get a cleanTable method in prototype space of that object

createRoom.prototype.cleanTableProto = function (soap) {
	console.log(`Cleaning ${this.table} using ${soap} `);
};

jake.cleanTableProto(" soapERR ");
// Cleaning Jake's table using  soapERR
john.cleanTableProto("water");
// Cleaning John's table using water

//**************** This inside a class ********************

//* The best ways is We can use ES6 classes avoid the prototype, and our method will provided inside the class

class CreateRoom {
	constructor(name) {
		this.table = `${name}'s table`;
	}

	cleanTableFn(something) {
		console.log(`Cleaning ${this.table} using ${something}`);
	}
}

let rob = new CreateRoom("rob");
let freida = new CreateRoom("frieda");

rob.cleanTableFn("foam");
// Cleaning rob's table using foam inside class

freida.cleanTableFn("oil");
// Cleaning frieda's table using oil inside class
