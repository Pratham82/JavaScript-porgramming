// ES6: Use getters and setters to Control Access to an Object

// You can obtain values from an object and set the value of a property within an object.

/*
* It is similar to java, how we use the private private variables using getters and setters
* Getter functions are meant to simply return (get) the value of an object's 
  private variable to the user without the user directly accessing the private variable.

* Setter functions are meant to modify (set) the value of an object's private variable 
  based on the value passed into the setter function. This change could involve calculations, 
  or even overwriting the previous value completely.

* Getters and setters are important because they hide internal implementation details
* It is convention to precede the name of a private variable with an underscore (_). 
  However, the practice itself does not make a variable private.

*/

/*
Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

Now create a getter and a setter in the class, to obtain the temperature in Celsius.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of 
temperature in Fahrenheit, and C is the value of the same temperature in Celsius.

Note: When you implement this, you will track the temperature inside the class in
 one scale, either Fahrenheit or Celsius.

This is the power of a getter and a setter. You are creating an API for another user, 
who can get the correct result regardless of which one you track.

In other words, you are abstracting implementation details from the user.
*/


// Only change code below this line
class Thermostat{
    constructor(Fahrenheit){
        this.Fahrenheit = Fahrenheit
    }
    
    //Takes fahrenheit as input returns celsius
    get temperature(){
        return this.Celsius = 5/9 * (this.Fahrenheit -32)
    }

    // Takes celsius as input and returns fahrenheit as output
    set temperature(Celsius){
        return this.Fahrenheit =  Celsius *9.0/ 5 + 32
    }


}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(thermos);