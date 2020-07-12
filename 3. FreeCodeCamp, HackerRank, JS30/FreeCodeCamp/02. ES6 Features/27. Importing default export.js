// ES6: Import a Default Export

/*
To import a default export, you need to use a different import syntax

import add from "./math_functions.js";
The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}).
add here is simply a variable name for whatever the default export of the math_functions.js file is. 
You can use any name here when importing a default.
*/ 

import subtract from './math_functions.js'

// Only change code above this line

subtract(7,4);
