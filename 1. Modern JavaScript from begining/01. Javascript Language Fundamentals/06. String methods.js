// String methods
const firstName = 'Sherlock'
const LastName = 'Holmes'

let val;


// Concatenation
val = firstName + LastName
val = firstName +" "+LastName

// Append
val = "John ";
val +=  "Doe"

//  Statements
age = 22
val = "Hi, my "+ "name " + "is "+ firstName+ " and "+ "I'm "+ age+ " years "+ " old "

// Escaping
val = 'I\'m amazed by that, I can\'t wait to perform that exercise'  // We can use '\' back slash for escaping

//* String properties and methods

//length property
val = LastName.length

// Concat method
val = firstName.concat(' ',LastName)


// Change to upperCase and lowercase (methods)
val = firstName.toUpperCase()
val = LastName.toLowerCase()

// Using string as arrays
val = firstName[2]

// indexOf method - for searching certain character in a string
//val = firstName.indexOf('h')
val = firstName.lastIndexOf('h')  // Searches for the last occurrence of the char/ word

// charAt
val = LastName.charAt(0)  // Returns the character present at given index

// Get last character of string
val =  firstName.charAt(firstName.length -1 )

// Substrings
val =  firstName.substring(2,4)

// Slice (Similar to substrings but we can add negative indexes as well)
val  = firstName.slice(0,3) // Output: She
val  = firstName.slice(-5)  // Output: rlock

//Split : syntax -  string.split(' symbol to split ') 
const statement = "Hi there what you working on there"
const values = "Maths, Science, Physics, Geography, History, Economics"
val =  values.split(",")

//Replace
val = values.replace('Maths','Mathematics')  
//OutPur: Mathematics, Science, Physics, Geography, History, Economics

// Include : gives true or false value if the value is present in the string or not
val = values.includes('Algebra')
//Output: false

console.log(val);
