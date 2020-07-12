/*
* Sets
1. List or set of unique values, any type whether its primitive or reference
2. They are always unique so we cannot store one value twice
*/

//* Creating new set

const set1 = new Set();

//* Adding values to set

// All the values are unique
set1.add(500);
set1.add("String 1");
set1.add({ name: "Travis" });
set1.add(true);
set1.add(false);

//* If we try to add a duplicate value it will be ignored and we will still get the same set
set1.add(500);

console.log(set1);
/*
Set(4) {500, "String 1", {…}, true}
[[Entries]]
0: 500
1: "String 1"
2: Object
3: true
size: 4
*/

//* Creating set different way:
const set2 = new Set(["val1", 4545, true, { key1: "John Doe" }, 522.5]);

console.log(set2);
/*
Set(5) {"val1", 4545, true, {…}, 522.5}
[[Entries]]
0: "val1"
1: 4545
2: true
3: Object
4: 522.5
size: 5
*/

//* Get Set size
console.log(set1.size); //5

//* Check for values in set
console.log(set1.has(500)); //true

// We can also check with expression
console.log(set1.has(300 + 200)); //true

// Both lines have same meaning
console.log(set1.has(!true)); //true
console.log(set1.has(false)); //true

/*
 * We will get false even if we have the object {name: Travis} inside the set1 because its an reference object, not a primitive value 
 * which is stored in the stack it is stored in heap, which makes it a reference value
 
 * Example:
let s1 = new String("Hi");
let s2 = new String("Hi");
console.log(`s1 == s2 ${s1 == s2}`); //false
*/

console.log(set1.has({ name: "Travis" })); //False

//* This will return false because it points to different  location in memory it not a primitive type like number, boolean, string
console.log({ name: "Travis" } === { name: "Travis" }); //False

// Primitive type
console.log("s1" === "s1"); //true

//* Delete from a set

// pass in value for deleting
set1.delete(500);
console.log(set1);
/*
500 has been deleted from set

Set(4) {"String 1", {…}, true, false}
[[Entries]]
0: "String 1"
1: Object
2: true
3: false
size: 4
*/

//* Iterate over sets
for (let item of set1) {
	console.log(item);
}
/*
String 1
{name: "Travis"}
true
false
*/
//* We can use other methods of map like keys, value an entries'

// because the set has only value, both keys and values method will return values only

for (let i of set1.values()) {
	console.log(i);
}
for (let i of set1.keys()) {
	console.log(i);
}
/*
String 1
{name: "Travis"}
true
false
*/

//* Entries will return an array

for (let i of set1.entries()) {
	console.log(i);
}

/*
(2) ["String 1", "String 1"]
(2) [{…}, {…}]0: {name: "Travis"}
(2) [true, true]
(2) [false, false]
*/

//* ForEach loop

set1.forEach((val) => {
	console.log(val);
});

/*
String 1
{name: "Travis"}
true
false
*/

//* Converting set to an array

const setToArr1 = Array.from(set1);

console.log(setToArr1); //(4) ["String 1", {…}, true, false]

const setToArr2 = [...set1];
console.log(setToArr2); //(4) ["String 1", {…}, true, false]
