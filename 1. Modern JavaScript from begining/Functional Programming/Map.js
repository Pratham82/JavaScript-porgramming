/*
 * Map: It's also a higher order function which, just like filter it will go through an array, and transforms the array
 */

// Example 1: Finding square of each number in array
// Without using Map: In regular JS fashion we would approach this problem something like this. Create an empty array. Iterate over the given array. Take the item from the current array and square it.Push the squared item in the empty array.Return the new array

let arr = [1, 2, 3, 4, 5];

let squaredArray = [];

for (let i = 0; i < arr.length; i++) {
	squaredArray.push(arr[i] ** 2);
}

// Output:
console.log(squaredArray); // [ 1, 4, 9, 16, 25 ]

// With Map: Now we can see some map magic. While doing the same thing using map we don't have to explicitly declare a new array map method creates it under the hood. map method returns a copy of the array.

// Using map and arrow function it be applied something like this:
const newArr = arr.map((val) => val ** 2);
console.log(newArr); // [ 1, 4, 9, 16, 25 ]

//-----------------------------------------------------------------------------

// Example 2: Add the index of the current item into itself
// Input:
const arr = [0, 1, 2, 3, 4, 5];

// Output:
// [ 0, 2, 4, 6, 8 ]
// Without using Map:

let newArray = [];

for (let i = 0; i < arr.length; i++) {
	newArray.push(arr[i] + i);
}

console.log(newArray); // [ 0, 2, 4, 6, 8 ]

// In the following example we will make use of 3 parameters. val is the current value of item, index od current item, arr is the current array that we are iterating

// With Map:

const newArray = arr.map((val, index, arr) => val + arr[index]);

console.log(newArray); // [ 0, 2, 4, 6, 8 ]

//-----------------------------------------------------------------------------
// Example 3: Extract full name and title of the employees from given object
// Object that we will be working with:

let EmployeesObject = {
	Employees: [
		{
			userId: "rirani",
			jobTitleName: "Developer",
			firstName: "Romin",
			lastName: "Irani",
			preferredFullName: "Romin Irani",
			employeeCode: "E1",
			region: "CA",
			phoneNumber: "408-1234567",
			emailAddress: "romin.k.irani@gmail.com",
		},
		{
			userId: "nirani",
			jobTitleName: "Database Admin",
			firstName: "Neil",
			lastName: "Irani",
			preferredFullName: "Neil Irani",
			employeeCode: "E2",
			region: "CA",
			phoneNumber: "408-1111111",
			emailAddress: "neilrirani@gmail.com",
		},
		{
			userId: "thanks",
			jobTitleName: "Program Directory",
			firstName: "Tom",
			lastName: "Hanks",
			preferredFullName: "Tom Hanks",
			employeeCode: "E3",
			region: "CA",
			phoneNumber: "408-2222222",
			emailAddress: "tomhanks@gmail.com",
		},
	],
};
// Storing employee Array in separately for readability
const data = EmployeesObject.Employees;

// Extracting the required data and storing into new array
const curatedData = data.map(
	(employee) =>
		`Name: ${employee.firstName} ${employee.lastName}, Title: ${employee.jobTitleName}`
);

console.log(curatedData);

// Output:
[
	"Name: Romin Irani, Title: Developer",
	"Name: Neil Irani, Title: Database Admin",
	"Name: Tom Hanks, Title: Program Directory",
];
