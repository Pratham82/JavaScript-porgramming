// Basic JavaScript: Local Scope and Functions

// The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

globalVar =5454;
function myLocalScope() {
    'use strict';
  
    // Only change code below this line
    /* My notes  
    Here my var is only accessible inside myLocalScope because it is declared inside the function.
    In the previous example we looked at global scope which is accessible with any function

    Hence the last console log will cause an exception:  ReferenceError: myVar is not defined
    */ 

    var myVar = 45;
    console.log('inside myLocalScope', myVar);
    console.log(globalVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);
  