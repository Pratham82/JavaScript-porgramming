/*
1. Given an array. Write a function to change all even numbers in an array to odd numbers by adding 1 to it.
const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

Your output should be:
[1, 3, 3, 59, 5, 7, 25, 9, 15, 5]

*/

const changeToOdd = arr => arr.map(val => (val % 2 === 0 ? val + 1 : val))

console.log(changeToOdd([1, 2, 3, 58, 5, 6, 24, 8, 15, 4]))

/*
1. Get the names in an array for only those who have a cycle.
const family = [
  {
    name    : 'Tanay',
    haveCycle : true
  },
  {
    name     : 'Akanksha',
    haveCycle : false
  },
  {
    name     : 'Tanvi',
    haveCycle : true
  },
	{
    name     : 'Kanak',
    haveCycle : false
  }
];


Your output should be: ['Tanay', 'Tanvi']
*/
const family = [
  {
    name: 'Tanay',
    haveCycle: true,
  },
  {
    name: 'Akanksha',
    haveCycle: false,
  },
  {
    name: 'Tanvi',
    haveCycle: true,
  },
  {
    name: 'Kanak',
    haveCycle: false,
  },
]

// const ar = [
//   { name: 'prathamesh', age: 25 },
//   { name: 'jay', age: 29 },
//   { name: 'rock', age: 19 },
// ]

const filterCycleOwners = arr =>
  arr.filter(({ name, haveCycle }) => haveCycle && name)

const filterCycleOwnersMap = arr =>
  arr.map(({ name, haveCycle }) => haveCycle && name).filter(owner => owner)

console.log(filterCycleOwners(family))
console.log(filterCycleOwnersMap(family))

/*
1. Given an array. Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number.

const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

Your output should be: [2, 6, 8, 4]
*/
const arr2 = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4]

const filterEvenAndLessThan8 = arr => arr.filter(n => n % 2 === 0 && n <= 8)
console.log(filterEvenAndLessThan8(arr2))

/*

1. Given an array. Write a function that takes in the given array and prints only the words which are more than 5 characters in length.

 const arr = ['eat', 'sleep', 'repeat', 'code'];

Your output should be: ['repeat']
*/

const arr3 = ['eat', 'sleep', 'repeat', 'code']

const filterWordsGT5 = arr => arr.filter(word => word.length > 5)

console.log(filterWordsGT5(arr3))

/*
Given an array. Write a function to get the sum of all elements which are greater than 50.

const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];

Your output should be: 190
*/
const arr4 = [1, 2, 3, 58, 5, 6, 62, 8, 70]

const sumGT50 = arr => arr.filter(n => n > 50).reduce((a, b) => a + b, 0)
console.log(sumGT50(arr4))

/*
1. Given an array. Write a function to find the product of all elements which are even.

const arr = [1, 2, 3, 7, 5, 6, 8, 9];

Your output should be: 96
*/

const arr5 = [1, 2, 3, 7, 5, 6, 8, 9]
const evenProduct = arr =>
  arr.filter(n => n % 2 == 0).reduce((prev, curr) => prev * curr)

console.log(evenProduct(arr5))

/*
----Extra question
Calculate the total amount of the products in the shopping cart, you can use the reduce() method
let shoppingCart = [
  {
    product: 'phone',
    qty: 1,
    price: 500,
  },
  {
    product: 'Screen Protector',
    qty: 1,
    price: 10,
  },
  {
    product: 'Memory Card',
    qty: 2,
    price: 20,
  },
];
*/

let shoppingCart = [
  {
    product: 'phone',
    qty: 1,
    price: 500,
  },
  {
    product: 'Screen Protector',
    qty: 1,
    price: 10,
  },
  {
    product: 'Memory Card',
    qty: 2,
    price: 20,
  },
]
const calculatePrice = arr =>
  arr.reduce((prev, curr) => prev + curr.price * curr.qty, 0)

console.log(calculatePrice(shoppingCart))

/*
1. Given an array of objects. Write a function to find the sum of ages of each person.

const arr = [
	{
		name: "Jay",
		age: 60
	},
	{
		name: "Gloria",
		age: 36
	},
	{
		name: "Manny",
		age: 16
	},
	{
		name: "Joe",
		age: 9
	}
]

Your output should be: 121
*/
const ages = [
  {
    name: 'Jay',
    age: 60,
  },
  {
    name: 'Gloria',
    age: 36,
  },
  {
    name: 'Manny',
    age: 16,
  },
  {
    name: 'Joe',
    age: 9,
  },
]

const calcAge = arr => arr.reduce((prev, { age }) => prev + age, 0)
console.log(calcAge(ages))

/*
Given an array. Convert it in to an object with key as the index of each element and value as the element itself.

const arr = ["You", "all", "are", "rockstars"];

Your output should be:
{'0': "You", '1': "all", '2': "are", '3': "rockstars"}
*/
const arrKeys = ['You', 'all', 'are', 'rockstars']
const convertToObj = arr =>
  arr.map((val, i) => ({
    [i]: val,
  }))

console.log(convertToObj(arrKeys))

const a = new Array(10).fill(1)
console.log(a)

/*

1. Given an array of objects. If the name of an item is more than 5 characters in length, add type as ‘vegetable’. If the name of an item is less than or equal to 5 characters in length, add type as ‘fruit’. 

```jsx
const arr = [
	{
		name: "Apple"
	},
	{
		name: "Mango"
	},
	{
		name: "Potato"
	},
	{
		name: "Guava"
	},
	{
		name: "Capsicum"
	}
]

Your Output should be:
[
	{
		name: "Apple",
		type: "fruit"
	},
	{
		name: "Mango",
		type: "fruit"
	},
	{
		name: "Potato"
		type: "vegetable"
	},
	{
		name: "Guava",
		type: "fruit"
	},
	{
		name: "Capsicum",
		type: "vegetable"
	}
]
```
*/

const mixed = [
  {
    name: 'Apple',
  },
  {
    name: 'Mango',
  },
  {
    name: 'Potato',
  },
  {
    name: 'Guava',
  },
  {
    name: 'Capsicum',
  },
]

const identifyVeggiesFruits = arr =>
  arr.map(({ name }) =>
    name.length > 5 ? { name, type: 'vegetable' } : { name, type: 'fruit' }
  )

console.log(identifyVeggiesFruits(mixed))

/*
1. Given an array of objects.

```jsx
const inventory = [
    {name: 'fans', quantity: 3},
    {name: 'chimneys', quantity: 0},
    {name: 'bulbs', quantity: 5},
    {name: 'stove', quantity: 1}    
  ];

**Question:**
a. Get all the items in an array whose quantity is less than 2.
b. Get the total quantity of items present in the inventory.
c. Find the object which contains the item whose quantity is zero.
```
*/

const inventory = [
  { name: 'fans', quantity: 3 },
  { name: 'chimneys', quantity: 0 },
  { name: 'bulbs', quantity: 5 },
  { name: 'stove', quantity: 1 },
]

const findLT2 = arr => arr.filter(({ quantity }) => quantity < 2)

const totalProducts = arr =>
  arr.reduce((prev, { quantity }) => prev + quantity, 0)

const findOutOfStockProduct = arr => arr.find(val => val.quantity === 0)

console.log(findLT2(inventory))
console.log(totalProducts(inventory))
console.log(findOutOfStockProduct(inventory))

/*
1. Given an array. Write a function to join all elements of the array with a hyphen in between them.

const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]

Your output should be: 
Violet-Indigo-Blue-Green-Yellow-Orange-Red
*/

const colors = ['Violet', 'Indigo', 'Blue', 'Green', 'Yellow', 'Orange', 'Red']
const joinColors = arr => arr.join('-')
console.log(joinColors(colors))

/*
1. Write a function that accepts a number as input and inserts hyphens between every two even numbers.

If your input is: 24345687

Your output should be: 2-23456-87
*/

const st = 24345687

const isEven = n => n % 2 === 0
const addHyphens = n =>
  String(n)
    .split('')
    .map((val, i, arr) => (isEven(val) & isEven(arr[i + 1]) ? val + '-' : val))
    .join('')

console.log(addHyphens(st))

/*
1. Write a function that takes in a string and converts all the characters to uppercase. (Hint: toUpperCase())

```jsx
If your input is: "neogrammer"
Your output should be: "NEOGRAMMER"

If your input is: "neoG"
Your output should be: "NEOG"
```
*/

const upperCase = str => str.toUpperCase()
const capitalizeWord = word => word.split('').map(upperCase).join('')
console.log(capitalizeWord('neogrammer'))

/*
1. Write a function that takes in a string and converts only the vowels to uppercase and all other characters to lowercase.

If your input is: "neoG"
Your output should be: "nEOg"
*/

const vowels = ['a', 'e', 'i', 'o', 'u']
const capitalizeVowels = str =>
  str
    .split('')
    .map(char =>
      vowels.includes(char.toLowerCase())
        ? char.toUpperCase()
        : char.toLowerCase()
    )

console.log(capitalizeVowels('neoG'))

/*
. Flatten an array without using flat().

    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
  ];

Your output should be: ['a', 'b', 'c', 'c', 'd', 'e', 'e', 'd', 'f']
*/

const arr7 = [
  ['a', 'b', 'c'],
  ['c', 'd', 'e'],
  ['e', 'd', 'f'],
]
const customFlatten = arr => [].concat(...arr)
const customFlattenReduce = arr =>
  arr.reduce((acc, curr) => acc.concat(curr), [])
console.log(customFlatten(arr7))
console.log(customFlattenReduce(arr7))

/*
1. Count the occurrences of distinct elements in the given array.

```jsx
const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
  ];

Your output should be: {a: 1, b: 1, c: 2, d: 2, e: 2, f: 1}
```
*/

// Creating a polyfill for flattening an array
Array.prototype.customFlatten = function () {
  return [].concat(...this)
}
const input = ['a', 'b', 'c', 'a']

const countOccurrences = arr => {
  let obj = {}
  arr.customFlatten().map(val => {
    !obj.hasOwnProperty(val) ? (obj[val] = 1) : obj[val]++
  })
  return obj
}
// arr.reduce((prev, curr) => ({ [curr]: 'a' }), {})

console.log(countOccurrences(arr7))

// Extraaa-------

const sum = a => b => b ? sum(a + b) : a
// function sumCurry(a) {
//   return b => {
//     return sum(a + b)
//   }
// }

// console.log(sumCurry(2)(4))
console.log(sum(2)(4)(6)(10)(20)())
// console.log(sumCurry(2)(4)(10)(17))
