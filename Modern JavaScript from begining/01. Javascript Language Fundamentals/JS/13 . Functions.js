//Functions

// Function declarations
function greet(){
    //console.log('Hello there');
    return 'Hello There!!'
}

// Calling a function
greet()
console.log(greet())   // For printing a return statement


// Functions with parameters
// We can give thew default values in the parameters from ES6
function greet_2(firstName='DefFirstName', lastName='DefLastName'){
    
    console.log(`Hi ${firstName} ${lastName}!!`);
}
greet_2('John','Snow')
greet_2()

// Taking input from HTML

// This statement will create a HTML element i.e a button which invokes function 
//html = `<button onclick="greet_3()">Enter your details</button>`
//document.body.innerHTML= html

function greet_3(){
    // prompt will give a prompt in a browser for details entry
    var input = prompt('Enter your name').split(" ")
    console.log(`Hi ${input[0]} ${input[1]}!!`);
}


// Function expression
// Functions expression is concept of putting a function as a variable assignment

// Usually the function name here is anonymous
const fun = function fun2(){

}

console.log(fun);
/*
While calling the function we have to use the variable name.
when we log we will get the name of the function if we had given any name. 
If function is anonymous name will be not be logged.
ƒ fun2(){

}
*/

const square =  function(num){
    return num**2
}

console.log(square(12));

const cube =  function(num){
    return num**3
}

console.log(cube(2));


// Immediately invokable function expression IFFIEs

// The function that you declare and run at the same time

// Syntax ( function(){  <function body> }  ) ();
// Semicolon is very important in the end
(function(){
    console.log('IFFIE function');
})();


// IFFIE with parameter

(function(name){
    console.log(`${name} how you doing??`);
})('Drew')


// Property methods
// When a function is used in the object it is called a method

const calc ={
    add:function(num1,num2){
        console.log(`${num1} + ${num2}: ${num1+num2}`);
    },
    subtract:function(num1,num2){
        console.log(`${num1} - ${num2}: ${num1 - num2}`);
    }
}

// Adding new property in object

calc.del = function(){
    console.log('object deleted !!');
}

val = calc.add(45,45)
val = calc.subtract(45,45)
val = calc.del()