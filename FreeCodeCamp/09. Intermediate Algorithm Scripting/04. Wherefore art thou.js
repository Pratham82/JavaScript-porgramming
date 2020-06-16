// Intermediate Algorithm Scripting: Wherefore art thou

/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
*/

function whatIsInAName(collection, source) {
	var arr = [];
	// Only change code below this line
	// var val = Object.values(source);
	var keys = Object.keys(source);
	return collection.filter((obj) => {
		for (var key of keys) {
			if (!obj.hasOwnProperty(key) || obj[key] != source[key]) {
				return false;
			}
		}
		return true;
	});
	// Only change code above this line
}

console.log(
	whatIsInAName(
		[
			{ first: "Romeo", last: "Montague" },
			{ first: "Mercutio", last: null },
			{ first: "Tybalt", last: "Capulet" },
		],
		{ last: "Capulet" }
	)
); // OP: [ { first: 'Tybalt', last: 'Capulet' } ]
whatIsInAName(
	[
		{ apple: 1, bat: 2 },
		{ apple: 1 },
		{ apple: 1, bat: 2, cookie: 2 },
		{ bat: 2 },
	],
	{ apple: 1, bat: 2 }
);

console.log(
	whatIsInAName(
		[
			{ apple: 1, bat: 2 },
			{ apple: 1 },
			{ apple: 1, bat: 2, cookie: 2 },
			{ bat: 2 },
		],
		{ apple: 1, bat: 2 }
	)
); // OP: [ { apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 } ]

// var arr = [
// 	{ first: "Romeo", last: "Montague" },
// 	{ first: "Mercutio", last: null },
// 	{ first: "Tybalt", last: "Capulet" },
// ];
// var obj = { last: "Capulet" };
// var val = Object.values(obj);
// var key = Object.keys(obj);
// console.log(key);

// console.log(arr[2][key] == val);

// var obj = { apple: 1, bat: 2 };
// var keys = Object.keys(obj);
// var values = Object.values(obj);
// console.log(values);
