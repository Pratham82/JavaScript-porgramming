// Basic Data Structures: Access Property Names with Bracket Notation

/*
We've defined a function, checkInventory, which receives a scanned item as an argument. Return the current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided as an argument to checkInventory.


*/


let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
    let val  
    val = foods[scannedItem]
    return val
  // Only change code above this line
}

console.log(checkInventory("apples"));

var a;
a = foods.apples
console.log(a);