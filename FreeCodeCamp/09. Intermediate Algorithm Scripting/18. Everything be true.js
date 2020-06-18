// Intermediate Algorithm Scripting: Everything Be True

/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/

function truthCheck(collection, pre) {
	var new_arr = collection.map((i) => {
		return i[pre] ? true : false;
	});
	let checker = (arr) => arr.every((i) => i === true);
	return checker(new_arr) ? true : false;
}

truthCheck(
	[
		{ user: "Tinky-Winky", sex: "male" },
		{ user: "Dipsy", sex: "male" },
		{ user: "Laa-Laa", sex: "female" },
		{ user: "Po", sex: "female" },
	],
	"sex"
);
console.log(
	truthCheck(
		[
			{ user: "Tinky-Winky", sex: "male" },
			{ user: "Dipsy", sex: "male" },
			{ user: "Laa-Laa", sex: "female" },
			{ user: "Po", sex: "female" },
		],
		"sex"
	)
);

console.log(
	truthCheck(
		[
			{ user: "Tinky-Winky", sex: "male" },
			{ user: "Dipsy" },
			{ user: "Laa-Laa", sex: "female" },
			{ user: "Po", sex: "female" },
		],
		"sex"
	)
);

console.log(
	truthCheck(
		[
			{ user: "Tinky-Winky", sex: "male", age: 0 },
			{ user: "Dipsy", sex: "male", age: 3 },
			{ user: "Laa-Laa", sex: "female", age: 5 },
			{ user: "Po", sex: "female", age: 4 },
		],
		"age"
	)
);

// Checking every method on arry
var arr5 = [true, true, true, true];
let checker = (arr) =>
	arr.every((i) => {
		i === true;
	});

console.log(checker(arr5));
console.log(tr(arr5));

// First 2 test cases passed
var arr = [
	{ user: "Tinky-Winky", sex: "male" },
	{ user: "Dipsy" },
	{ user: "Laa-Laa", sex: "female" },
	{ user: "Po", sex: "female" },
];
var val = "sex";

for (var i in arr) {
	if (arr[i][val]) {
		console.log("true");
	} else {
		console.log("false");
	}
}
