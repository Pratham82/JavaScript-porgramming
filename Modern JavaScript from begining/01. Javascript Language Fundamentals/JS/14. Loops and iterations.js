// Loops 

// For loops

for(var i =0; i<=10;i++){
    if(i===2){
        console.log("2 is printed" );
        continue // Skips the "i -> 2"
        
    }
    if(i===5){
        //print("This is the half of the loop") Opens the print screen on browser
        break// Breaks the loop
    }
    console.log("i -> ",i);
}

//While loop
var i =1
console.log('---------------\nWhile loop:');
while(i<5){
    console.log("i -> ",i);
    i++
}

// do while
// This loop will run at least once even if the condition is not true
console.log("Do while loop:");
i = 100 
do {
    console.log(i);
    i++
}while(i<10)

// Looping through arrays

names =["Adam", "Alex", "Aaron", "Ben"]

//Using for loop
for(var i = 0; i<names.length; i++){
    console.log(names[i]);
}

//Using forEach loop
console.log('---For each loop---');
names.forEach(function(name){
    console.log(name);
})
console.log('--forEach with index--');
names.forEach(function(name, index,array){
    console.log(`${index} : ${name} `);
    console.log(array);
})

console.log('---For each using arrow functions--');
names.forEach((i)=>console.log(i))

// Map 
console.log('--map function--');
let users = [
    {id :1, name:'John'},
    {id :2, name:'Rob'},
    {id :3, name:'Rin'},
    {id :4, name:'Sasuke'},
    {id :5, name:'Naruto'},
]

let ids;
ids = users.map(function(user){
    //console.log(user.id);
    console.log(user.name);
})


// For in loop
let users2 ={
    firstName:'John',
    lastName:'Snow',
    email:'john.snow@gmail.com'
}

console.log('--for in loop--');
for(o in users2){
    //console.log(`${o}`); // This will return key
    console.log(`${users2[o]}`); // This will return values
}
