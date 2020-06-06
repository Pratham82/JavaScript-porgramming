// Conditionals

// If else statements
var value;  //By default value will be false after the declaration

if(value){
    console.log('Value is true');
}else{
    console.log('Value is false');
}

/*
*  Equal to operators (==)
If the variables have different types then this method
will convert the types of variables and check the equality
If the values are same then the give condition will be logged
*/

let age  = "23";
console.log("age: ", age, typeof age);
// if (age ==23){
//     console.log("Age is 23");
// }else{
//     console.log("Age is not equal to 23");
// }

/* 
* Not equal to operator (!=)
If the variables have different types then this method
will convert the types of variables and check the equality
If the values are different then the give condition will be logged
*/

if (age !=23){
    console.log("Age is not equal to 23");
}else{
    console.log("Age is 23");
}

/*
* Strict Equal to (===)  equal to (Checks the equality and the type of variables)
If the variables have different types then this method
will NOT convert the types of variables and check the equality
If the values are same then the give condition will be logged
*/

if (age ===23){
    console.log("Age is 23");
}else{
    console.log("Age is not equal to 23");
}

/*
* Strict Equal to (!==)  not equal to (Checks the equality and the type of variables)
If the variables have different types then this method
will NOT convert the types of variables and check the equality
If the values are same then the give condition will be logged
*/

if (age ===23){
    console.log("Age is 23");
}else{
    console.log("Age is not equal to 23");
}

// Check if the variable is defined or not

if(typeof age != 'undefined'){
    console.log(`age is defined, and it is ${age}`);
}else{
    console.log(`age is undefined`);
}

// Greater than (>)
if(age >18){
    console.log("You are an adult now.");
}else{
    console.log('Wait you are still a child.');
}

// Lesser than (>)
if(age < 30){
    console.log("You are still in your twenties.");
}else{
    console.log('Damn, you\'re old ');
}

age = 30

// Greater than equal to (>)
if(age >=18){
    console.log("You are an adult now.");
}else{
    console.log('Wait you are still a child.');
}

// Lesser than equal to (<=)
if(age <= 29){
    console.log("You are still in your twenties.");
}else{
    console.log('Damn, you\'re old ');
}

// If, else if and else
let color = 'yellow'

if(color ==='red'){
    console.log('Color is red');
}
else if(color ==='blue'){
    console.log('Color is blue');
}
else{
    console.log('Color is neither red nor yellow');
}


// Logical operators
age = 21
var name = 'Joe'

// And operator &&
if (age > 0 && age <13){
    console.log(`${name} is a child`);
}
else if (age >= 13 && age <=19){
    console.log(`${name} is a teenager`);
}
else{
    console.log(`${name} is an adult`);
}

// Or operator ||
if(age<21 || age>65){
    console.log('You cannot enter the club');
}else{
    console.log('You can enter the club');
}

// Ternary operator
age = 31
console.log(age < 21 ?'Go away child you\'re too young !!':'You seem old enough you can come in');

// If else without braces only works if the condition statement is single lined
if (age <20)
    console.log('Age is lesser than 20');
else if(age >=20 && age <=30)
    console.log('Age is between 20 and 30');
else
    console.log('Age is greater than 30');


