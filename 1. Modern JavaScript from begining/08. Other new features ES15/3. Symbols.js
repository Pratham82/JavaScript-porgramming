/*
* Symbols

1. It is a primitive type
2. Two symbols cannot be same

Uses of symbols:
1. Unique object keys
*/

//* Creating a symbol
//const sym1 = new Symbol();
// We cannot create a symbol with constructor
// It is a primitive type

const sym1 = Symbol();
console.log(sym1);

//* We can pass in identifier for a symbol
const sym2 = Symbol("symbol 2");
console.log(sym2);

//* No two symbols are same
console.log(Symbol() === Symbol()); // false

//* Even if the identifier is same
console.log(Symbol("sym1") === Symbol("sym1")); // false

//* Using symbol inside a string( For that we have to wrap our symbol in string or use toString so it will convert the symbol to a string)
console.log(`This is a string and this is a ${String(sym2)}`);
console.log(`This is a string and this is a ${sym2.toString()}`);

//* Unique object keys

const KEY1 = Symbol("key1: #$@##");
const KEY2 = Symbol("key2: !@#$$");

const obj = {};

//* For adding the variable as a key we have to use ['']

obj[KEY1] = "prop1";
obj[KEY2] = "prop2";
obj.KEY3 = "prop3";
obj.KEY4 = "prop4";

console.log(obj[KEY1]); //prop1
console.log(obj[KEY2]); //prop2

// Symbols are not enumerable in for...in

for (let i in obj) {
	console.log(`${i}: ${obj[i]}`);
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({ key: "prop" })); //{"key":"prop"}
console.log(JSON.stringify({ [Symbol("sym1")]: "prop" })); //{}
