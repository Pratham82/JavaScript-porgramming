const person = {
    firstName: 'John',
    lastName: 'Wick',
    age:25,
    email:'John.doe@gmail.com',
    contact: 4558771241,
    address:{
        City:'India',
        State:'MH',
        city:'Mumbai',
    },

    
    // Creating function for getting current birth year
    getBirthYear: function() {
        return 2020 - this.age
    },

    // Creating function for getting current birth year using arrow functions
    getBirthYear2 : (age) => new Date().getFullYear() - person.age ,

    hobbies: ['Petting dogs','Killing criminals','Driving super_cars']
}

// Storing whole object
let val
val = person

// Accessing one property of object using dot operator
val = person.firstName
val = person.lastName

// Accessing one property of object using bracket notation
val = person['firstName']
val = person['lastName']

//Accessing specific properties
val = person.DOB
val = person.email
val = person.contact

// Accessing object inside objects
val = person.address

// Accessing nested objects
val = person.address.city

// Accessing arrays inside objects
val = person.hobbies

// Accessing elements at certain position in arrays
val = person.hobbies[2]

val = person.getBirthYear2(person.age)

// Accessing method
let current_age = person.getBirthYear()
console.log(current_age);


console.log(val);


//Looping through objects
people = [{name:'Joe',age:21},{name:'Rick',age:22},{name:'Candice',age:20}]

for(let i = 0 ; i< people.length; i++){
    //console.log(people[i]);
    //console.log(people[i].name);
    console.log(people[i].age);
}

