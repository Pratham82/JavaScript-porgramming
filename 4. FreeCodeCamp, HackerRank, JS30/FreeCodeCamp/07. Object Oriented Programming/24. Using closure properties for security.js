// Object Oriented Programming: Use Closure to Protect Properties Within an Object from Being Modified Externally

/*
1. The simplest way to make public property private is by creating a variable within the constructor function.
2. This changes the scope of that variable to be within the constructor function versus available globally. 
3. This way, the variable can only be accessed and changed by methods also within the constructor function.

Example:
function Bird() {
  let hatchedEgg = 10; // private variable

  /// publicly available method that a bird object can use 
  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10

4. Here getHatchedEggCount is a privileged method, because it has access to the private variable hatchedEgg.
5. This is possible because hatchedEgg is declared in the same context as getHatchedEggCount. 
6. In JavaScript, a function always has access to the context in which it was created. This is called closure.
*/

/*
Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15.

*/

function Bird() {
	let weight = 15;
	this.getWeight = () => weight;
}

let sparrow = new Bird();
console.log(sparrow.getWeight());

// Example 2
function test() {
	let var1 = "new_var"; // test1 is only available to the test function because it is initialized locally and
	return var1;
}

console.log(test()); // OP: new_var
// console.log(test1); // OP:  undefined value
