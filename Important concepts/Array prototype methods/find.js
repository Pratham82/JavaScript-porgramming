const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 },
  { name: 'oranges', quantity: 10 },
  { name: 'berries', quantity: 7 },
]

const findFruit = (inventoryList, targetFruit) =>
  inventoryList.find((fruit) => fruit.name === targetFruit)
    ? `We keep ${targetFruit} in the inventory`
    : `We dont keep ${targetFruit} in the invenstory`

const isInStock = (inventoryList, target) =>
  inventoryList.find((fruit) => fruit.name === target) === undefined
    ? `We dont keep ${target} at out store`
    : inventoryList.find((fruit) => fruit.name === target).quantity > 0
    ? `${target} is in stock`
    : `${target} is out of stock`

console.log(findFruit(inventory, 'apples'))
console.log(isInStock(inventory, 'apples'))
console.log(isInStock(inventory, 'bananas'))
console.log(isInStock(inventory, 'tomatoes'))

// This is method returns the first element in the provided array that satisfies given function, if none of the value satisfies the function undefined is returned

const arr = [12, 243, 34, 126, 657, 23]

//console.log(arr.find(val => val === 454)) // Returns undefined because the value is not present in the array
//console.log(arr.find(val => val === 23)) // Returns the value

/* It takes 3 parameters
 * ( element, index, array )
 *
 */

// Examples
// Find an object in an array by one of its properties
//
// Inventory Management
//
// Q.1 Find if the fruit is present in the inventory
// if present then return 'We keep fruit in the inventory'
// else return 'We dont keep fruit in the inventory'
//
// Q.2 Find if the fruit provided is in stock or not?
// if the fruit is in stock return 'fruit is in stock'
// if the fruit is not in stock return 'fruit is out of stock'
