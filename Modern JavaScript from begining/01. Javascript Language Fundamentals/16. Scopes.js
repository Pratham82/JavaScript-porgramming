//Scopes

//Global level scope
var global = 1
let lets = 2
const constant = 3



function fun1(){    
    // Local/function level scope
    var global = 4
    let lets = 5
    const constant = 6
    console.log(`Global scope: global: ${global}, let: ${lets}, const ${constant}`);
}

fun1()

// block level scope
if(true){
    var global = 7
    let lets = 8
    const constant = 9
    console.log(`Global scope: global: ${global}, let: ${lets}, const ${constant}`);
}

for(var global =0; global<5; global++){
    console.log(`${global}`);
}

// The value which is declared with var  has a function scope, let and const have block level scope

console.log(`Global scope: global: ${global}, let: ${lets}, const ${constant}`);


