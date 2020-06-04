// ES6: Mutate an Array Declared with const

// Some developers prefer to assign all their variables using const by default,
//  unless they know they will need to reassign the value. Only in that case, they use let.

// However, it is important to understand that objects (including arrays and functions)
//  assigned to a variable using const are still mutable. Using the const declaration 
// only prevents reassignment of the variable identifier.

// An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignment.

const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  s.unshift(2)
  s.pop()
  return s
  // Only change code above this line
}
editInPlace();

