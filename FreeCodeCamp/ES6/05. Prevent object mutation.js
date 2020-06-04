// ES6: Prevent Object Mutation

// To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.

// Once the object is frozen, you can no longer add, update, or delete properties
// from it. Any attempt at changing the object will be rejected without an error.

/* In this challenge you are going to use Object.freeze to prevent mathematical 
constants from changing. You need to freeze the MATH_CONSTANTS object so that no 
one is able to alter the value of PI, add, or delete properties.
*/

// Object.freeze work for Objects as well as arrays.

function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    //const arr = [45,4564,54,5,4]     Creating array
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS)
    
    //Object.freeze(arr)                  Testing Object.freeze on array
    
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
      arr = [44,99,]
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();
  