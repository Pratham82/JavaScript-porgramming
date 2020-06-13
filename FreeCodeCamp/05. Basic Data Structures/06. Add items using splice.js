// Basic Data Structures: Add Items Using splice()

/*
splice with 3 parameters
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
/// the second entry of 12 is removed, and we add 13 and 14 at the same index
console.log(numbers);
/// returns [ 10, 11, 12, 13, 14, 15 ]
* The index at which to begin deleting elements (3),
* The number of elements to be deleted (1), 
* and the elements (13, 14) to be inserted at that same index
*/

function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0,2,'DarkSalmon','BlanchedAlmond')
    // Only change code above this line
    return arr;
}
  
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
  