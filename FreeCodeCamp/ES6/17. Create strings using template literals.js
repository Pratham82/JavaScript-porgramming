// ES6: Create Strings using Template Literals

/*
Use template literal syntax with backticks to display each entry of the result 
object's failure array. Each entry should be wrapped inside an li element with 
the class attribute text-warning, and listed within the resultDisplayArray.

Use an iterator method (any kind of loop) to get the desired output (shown below).
*/

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // Only change code below this line
  const resultDisplayArray = [];
  for(let i= 0; i< arr.length; i++){
      resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
  }
  // Only change code above this line

  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);