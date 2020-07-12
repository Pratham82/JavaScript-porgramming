/*
* Maps

1. Maps are new object structure introduced in ES6
2. Map is an object that holds key value pairs
3. Any value whether its an object reference type or primitive can be used as key or value
4. We can use the object as the key
*/

//* Creating a map

const map1 = new Map();

//Setting keys
const key1 = "this is a string",
	key2 = {},
	key3 = function () {};

// Set map values by key
map1.set(key1, "Value of key 1");
map1.set(key2, "Value of key 2");
map1.set(key3, "Value of key 3");

//* Get values:
console.log(";---------------");
console.log(map1.entries());

console.log(map1.get(key1)); //Value of key 1
console.log(map1.get(key2)); //Value of key 2
console.log(map1.get(key3)); //Value of key 3

//* Count values

console.log(map1.size); //3

//* Iterating over map

for (let [key, value] of map1) {
	console.log(`Key: ${key}, Value: ${value}`);
}

/*
Output:
Key: this is a string, Value: Value of key 1
Key: [object Object], Value: Value of key 2
Key: function () {}, Value: Value of key 3
*/

//* Iterating over keys

for (let key of map1.keys()) {
	console.log(`Key: ${key}`);
}

/*
Output:
Key: this is a string
Key: [object Object]
Key: function () {}
*/

//* Iterating over values

for (let value of map1.values()) {
	console.log(`Value: ${value}`);
}

/*
Output:
Value: Value of key 1
Value: Value of key 2
Value: Value of key 3
*/

//* Loop with forEach
// Here the 2n var will be key and first var will be value
map1.forEach((v, k) => {
	console.log(`${k} : ${v}`);
});

/*
this is a string : Value of key 1
[object Object] : Value of key 2
function () {} : Value of key 3
*/

//* Convert map to array
const mapToArr1 = Array.from(map1);
console.log(mapToArr1);

/*
 [Array(2), Array(2), Array(2)]
0: (2) ["this is a string", "Value of key 1"]
1: (2) [{…}, "Value of key 2"]
2: (2) [ƒ, "Value of key 3"]length: 3__proto__: Array(0)
*/

//method 2 using spread operator
const mapToArr2 = [...map1];
console.log(mapToArr2);
/*
 [Array(2), Array(2), Array(2)]
0: (2) ["this is a string", "Value of key 1"]
1: (2) [{…}, "Value of key 2"]
2: (2) [ƒ, "Value of key 3"]length: 3__proto__: Array(0)
*/

//* Create an array of only values
const valArr1 = Array.from(map1.values());
console.log(valArr1);
/*
(3) ["Value of key 1", "Value of key 2", "Value of key 3"]
*/

const valArr2 = [...map1.values()];
console.log(valArr2);
/*
(3) ["Value of key 1", "Value of key 2", "Value of key 3"]
*/

//* Create an array of only keys
const keyArr1 = Array.from(map1.keys());
console.log(keyArr1); //(3) ["this is a string", {…}, ƒ]

const keyArr2 = [...map1.keys()];
console.log(keyArr2); //(3) ["this is a string", {…}, ƒ]

//* We can also create iterator
const map1Iter1 = [map1];
// this will return an object
console.log(map1Iter1);
/*
[Map(3)]
0: Map(3)
[[Entries]]
0: {"this is a string" => "Value of key 1"}
1: {Object => "Value of key 2"}
2: {function () {} => "Value of key 3"}
size: (...)
__proto__: Map
length: 1

*/

//This will return a object as MapIterator
console.log(map1Iter1[0].keys());
/*
MapIterator {"this is a string", {…}, ƒ}
[[Entries]]
0: "this is a string"
1: Object
2: function () {}
__proto__: Map Iterator
*/

console.log(map1Iter1[0].values());
/*
MapIterator {"Value of key 1", "Value of key 2", "Value of key 3"}
[[Entries]]
0: "Value of key 1"
1: "Value of key 2"
2: "Value of key 3"
__proto__: Map Iterator
*/
