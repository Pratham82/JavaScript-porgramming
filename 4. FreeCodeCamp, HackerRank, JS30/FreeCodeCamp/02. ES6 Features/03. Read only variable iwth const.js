// ES6: Declare a Read-Only Variable with the const Keyword

// const has all the awesome features that let has, with the added bonus that 
// variables declared using const are read-only. They are a constant value, 
// which means that once a variable is assigned with const, it cannot be reassigned.
//* You should always name variables you don't want to reassign using the const keyword.
// A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.

/*
Change the code so that all variables are declared using let or const. Use let when 
you want the variable to change, and const when you want the variable to remain constant.
 Also, rename variables declared with const to conform to common practices, meaning 
 constants should be in all caps.
*/


function printManyTimes(str) {
    "use strict";
  
    // Only change code below this line
  
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  
    // Only change code above this line
  
}
printManyTimes("freeCodeCamp");
  