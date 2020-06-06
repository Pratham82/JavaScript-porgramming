// ES6: Write Concise Declarative Functions with ES6

/* With ES6, You can remove the function keyword and colon altogether when 
defining functions in objects.*/

/*Refactor the function setGear inside the object bicycle to use the shorthand 
syntax described above.*/

// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);
  