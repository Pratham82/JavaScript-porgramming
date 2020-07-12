// ES6: Write Concise Object Literal Declarations Using Object Property Shorthand

/*
*Before ES6:

const getMousePosition = (x, y) => ({
  x: x,
  y: y
});

*After shorthand property:

const getMousePosition = (x, y) => ({ x, y });
S6 provides the syntactic sugar to eliminate the redundancy of having to write x: x.
You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. 
*/

/*
Use object property shorthand with object literals to create and return an object 
with name, age and gender properties.
*/

const createPerson = (name, age, gender) => ({name, age ,gender});
  
console.log(createPerson("Zodiac Hasbro", 56, "male"))