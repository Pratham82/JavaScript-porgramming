// ES6: Use Destructuring Assignment to Extract Values from Objects

// Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.
// You can extract as many or few values from the object as you want.

/*
const user = { name: 'John Doe', age: 34, height:'5 8"' };

Order of assignment doesn't matter

const {height,  age, name,} = user;
console.log(name);     //John Doe
console.log(age);      //34
console.log(height);   // 5 8"

*/

/*
Replace the two assignments with an equivalent destructuring assignment. 
It should still assign the variables today and tomorrow the values of today 
and tomorrow from the HIGH_TEMPERATURES object.
*/

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  // Syntax: {Properties of objects} = <Object_Name>

  const {today, tomorrow} = HIGH_TEMPERATURES
  console.log(today);
  console.log(tomorrow);
  
  // Only change code above this line
  