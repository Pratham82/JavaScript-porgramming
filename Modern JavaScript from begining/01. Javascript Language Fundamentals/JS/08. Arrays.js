// Arrays

let arr1 = [34,56,76,67,878,232]

// Creating array using array constructor
let arr2  = Array(65,22,35,76,8,23,42)

// Array of strings
let arr3 = ['red','green','yellow','blue','pink']

// Array of mixed types
let arr4 = [33.3,53,'q','colors',232,false, 'test',null,000, undefined, new Date(), {greet:"Hi", greet2:"Hello"}]
console.log(arr4);

let value;

// Length of an array
value = "length of arr1: "+ arr1.length

// Check if its an array
value = "arr1 is an array: "+Array.isArray(arr1)

// Fetch single value in array
value = arr1[1]

// Insert into arrays
arr1[1] =999 

// Find indexOf  value
value = arr1.indexOf(999)

// Mutating arrays:

// Add an element to the end of an array (push)
arr1.push('pushed')

// Add an element  to the start of an array (unshift)
arr1.unshift('unshift')

//Remove an element from end of the array(pop)
arr1.pop()

//Remove an element from start of the array(pop)
arr1.shift()

console.log(arr1);
// Splice values from an array
arr1.splice(0,2)  //Removes the value from 0 to 1 
// Output: [34, 999, 76, 67, 878, 232]

arr1.splice(1,1)  // Removes the first element form an array
// Output:L [76, 878, 232]

// Reverse the array
arr1.reverse()

//Concatenate arrays
value = arr1.concat(arr2)

//Sort arrays 
value = arr3.sort()
value = arr2.sort()  // This will sort by index values
/* 
Output: [22, 23, 35, 42, 65, 76, 8]
0: 22
1: 23
2: 35
3: 42
4: 65
5: 76
6: 8
*/

value = arr2.sort(ascending_order = (x,y) => x - y)  //here you can take anything as function name
value = arr2.sort(descending_order = (x,y) => y - x)  
//The inner function will use compare method and sort by actual values
// x - y : sort by ascending order
// y - x : sort by descending order
/*
Output:[8, 22, 23, 35, 42, 65, 76]
0: 8
1: 22
2: 23
3: 35
4: 42
5: 65
6: 76
*/

// Find method
arr_new = [34,56,55,73,42,2,21,12,44]

//Custom function
// This will return the first number that is lesser than 50 

// function findUnder50 (num){
//     return num < 50;
// }

const findUnder50 = (num) => num < 50  //Using arrow functions

value = arr_new.find(findUnder50)

console.log(arr1);
console.log(arr_new);
console.log(value);