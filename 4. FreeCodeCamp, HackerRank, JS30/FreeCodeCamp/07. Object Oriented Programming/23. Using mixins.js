//Object Oriented Programming: Use a Mixin to Add Common Behavior Between Unrelated Objects

/*
For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.

Example:
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};

The flyMixin takes any object and gives it the fly method.

let bird = {
  name: "Donald",
  numLegs: 2
};

flyMixin(bird);

Here bird and is passed into flyMixin, which then assigns the fly function to object. Now bird can fly

bird.fly(); // prints "Flying, wooosh!"
*/

/*
Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.
*/

let bird = {
	name: "Donald",
	numLegs: 2,
};

let boat = {
	name: "Warrior",
	type: "race-boat",
};

// Only change code below this line

let glideMixin = (obj) => (obj.glide = () => `${obj.name} is gliding`);

glideMixin(bird);
glideMixin(boat);

console.log(bird.glide());
console.log(boat.glide());
