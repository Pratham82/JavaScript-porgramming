// ES6: Compare Scopes of the var and let Keywords

// When you declare a variable with the var keyword, it is declared globally, or 
// locally if declared inside a function.

// The let keyword behaves similarly, but with some extra features. When you declare
// a variable with the let keyword inside a block, statement, or expression, its 
// scope is limited to that block, statement, or expression.


/*
Fix the code so that i declared in the if statement is a separate variable than 
i declared in the first line of the function. Be certain not to use the var 
keyword anywhere in your code.

This exercise is designed to illustrate the difference between how var and let 
keywords assign scope to the declared variable. When programming a function similar
 to the one used in this exercise, it is often better to use different variable 
 names to avoid confusion.
*/

// Here both the i's have different value because they are declared different scopes.
// This shows how thw block level scope and function scope differs.
function checkScope() {
    'use strict';
    let i = 'function scope';
    if (true) {
     let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  
  console.log(checkScope());