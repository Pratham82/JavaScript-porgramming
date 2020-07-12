/*
* Destructuring 

1. Introduced in ES6, it gives us easy way to assign variables and assign variables from array and objects
*/

//* Destructuring Arrays

// Destructuring assignments
[val1, val2, val3] = [10, 20, 30, 40, 50, 60, 70, 80];

console.log(val1); // 10
console.log(val2); // 20
console.log(val3); // 30

// Rest Pattern
//* Using spread operator we can assign the remaining value to an array
//* It should be always at the end of an array
[arr1, ...arr2] = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(arr1); // 10
console.log(arr2); //[20, 30, 40, 50, 60, 70, 80]

//* Skipping some values
//* here the middle value will be skipped and noy assigned to anything
//Ex. 1
[n1, , n2] = [101, 102, 103];

console.log(n1); //101
console.log(n2); //103

//Ex. 2
[a1, a2, a3, , a5] = [101, 102, 103, 104, 105];
console.log("a1: " + a1); //101
console.log("a2: " + a2); //102
console.log("a3: " + a3); //103
console.log("a5: " + a5); //105
//---------------------------------------------------

//* Destructuring Objects
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

console.log(a); //100
console.log(b); //200
console.log(rest); //{c: 300, d: 400, e: 500}

//---------------------------------------------------
console.log("---------------------------------------------------");
//* Array destructuring
const people = ["John", "Rob", "Tracy", "Fray"];

const [person1, person2, ...remaining] = people;

console.log(`Person1: ${person1}`); // Person1: John
console.log(`Person2: ${person2}`); // Person2: Rob
console.log(`Remaining: ${remaining}`); // Remaining: Tracy,Fray

// Parse array returned from a function
let p1, p2, p3;

function getRappers() {
	return ["Dax", "Joey Bada$$", "Hopsin"];
}

[p1, p2, p3] = getRappers();

console.log(p1); //Dax
console.log(p2); //Joey Bada$$
console.log(p3); //Hopsin

//---------------------------------------------------

console.log("---------------------------------------------------");
//* Object destructuring

const Person = {
	name: "Joey",
	age: 28,
	city: "New York",
	gender: "Male",
	greet: () => `Hello I'm ${Person.name} 👋`,
};

// Old Method ES5

const userName = Person.name,
	userAge = Person.age,
	userCity = Person.city,
	userGen = Person.gender,
	userFn1 = Person.greet;

console.log(userName); //Joey
console.log(userAge); //28
console.log(userCity); //New York
console.log(userGen); //Male
console.log(userFn1()); //hello I'm Joey

// Using ES6

// If the variable names are different then it won't work
//const { newName, newAge, newCity, newGen, newFn } = Person;

console.log("---------Using ES6 destructuring------");

// we have to use the same key as its provide in its objects
const { name, age, city, gender, greet } = Person;

console.log(name);
console.log(age);
console.log(city);
console.log(gender);
console.log(greet());
