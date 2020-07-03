/*
 * Filter: Its an higher order function which will loops through an array, and for each item going to pass it in callback function.
 * It will expect the callback function to return either true or false, to tell filter whether pr not this item should be in the new array
 */

let animals = [
	{ name: "FluffyKins 🐇", Species: "rabbit" },
	{ name: "DexLuthor 🐕", Species: "dog" },
	{ name: "Trenton 🐕", Species: "dog" },
	{ name: "Joey 🐕", Species: "dog" },
	{ name: "FetchFishy 🐟", Species: "fish" },
	{ name: "Dianna 🐟", Species: "fish" },
	{ name: "CatePurry 🐈", Species: "cat " },
	{ name: "BobBear 🐻", Species: "bear" },
	{ name: "Todd 🐻", Species: "bear" },
	{ name: "AlexLeon 🦁", Species: "lion" },
];

// We want to find dogs from given array

//*  Using for loop
// Solving the problem with for loop
let dogsFor = [];
for (let i = 0; i < animals.length; i++) {
	if (animals[i].Species == "dog") {
		dogsFor.push(animals[i]);
	}
}

console.log(dogsFor);
//Output:
[
	{ name: "DexLuthor 🐕", Species: "dog" },
	{ name: "Trenton 🐕", Species: "dog" },
	{ name: "Joey 🐕", Species: "dog" },
];

//* Using Filter
// We can do the same with filter and with much lesser code

//here we are only allowing the Species which are dogs so only those values will be included in the dogsFiltered array
let dogsFiltered = animals.filter((i) => i.Species === "dog");

console.log(dogsFiltered);
//Output:
[
	{ name: "DexLuthor 🐕", Species: "dog" },
	{ name: "Trenton 🐕", Species: "dog" },
	{ name: "Joey 🐕", Species: "dog" },
];

/*
 When we write code in smaller simpler functions they compose together, which allows us to reuse the functions all of the places.
*/

// We can also take the callback into separate function and adding it to that function again

// these functions doesn't have to do with filtering at all we can use them as it is

//Gives animals which are dogs
let isDog = function (animal) {
	return animal.Species === "dog";
};

//Gives animals which are not dogs
let isNotDog = function (animal) {
	return animal.Species !== "dog";
};

let dogsNormal = animals.filter(isDog);

console.log(dogsNormal);
//Output:
[
	{ name: "DexLuthor 🐕", Species: "dog" },
	{ name: "Trenton 🐕", Species: "dog" },
	{ name: "Joey 🐕", Species: "dog" },
];

let notDogs = animals.filter(isNotDog);
console.log(notDogs);
//
[
	{ name: "FluffyKins 🐇", Species: "rabbit" },
	{ name: "FetchFishy 🐟", Species: "fish" },
	{ name: "Dianna 🐟", Species: "fish" },
	{ name: "CatePurry 🐈", Species: "cat " },
	{ name: "BobBear 🐻", Species: "bear" },
	{ name: "Todd 🐻", Species: "bear" },
	{ name: "AlexLeon 🦁", Species: "lion" },
];
