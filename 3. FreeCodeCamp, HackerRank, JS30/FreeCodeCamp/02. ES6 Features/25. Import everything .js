// ES6: Use * to Import Everything from a File

/* 
Suppose you have a file and you wish to import all of its contents into the 
current file. This can be done with the import * as syntax

import * as myMathModule from "./math_functions.js";


for importing another js file:
<script type="module" src="ES6/25. Import everything .js"></script> -
Write the filename.js where another file is being imported from

We can give any variable name that we wanted

*/

import * as stringFunctions from './string_functions.js'

// Only change code above this line

var str_upper = stringFunctions.uppercaseString("hello");
var str_lower =  stringFunctions.lowercaseString("WORLD!");

console.log(str_upper);
console.log(str_lower);
