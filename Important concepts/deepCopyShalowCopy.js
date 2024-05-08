// https://doesitmutate.xyz/
/*
A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. 

As a result, when you change either the source or the copy, you may also cause the other object to change too.

A shallow copy means that certain (sub-)values are still connected to the original variable.
*/

/*

A deep copy means that all of the values of the new variable are copied and disconnected from the original variable. 
*/

const a = { a: 100 }
const b = a // shallow copy i.e(mutates the source)
const c = { ...a } // deep copy i.e(does not mutate the source)

console.log(a === b) // true
console.log(a == b) // true
console.log(a == c) // false
console.log(a === c) // false

//* Nested objects

const a1 = {
  foods: {
    dinner: 'Pasta',
  },
}
let b1 = { ...a1 } // mutates a1
// let b1 = structuredClone(a1) // does not mutates

b1.foods.dinner = 'Soup' // changes for both objects
console.log(b1.foods.dinner) // Soup
console.log(a1.foods.dinner) // Soup

//* How make deep copy of nested objects
// const copy = JSON.parse(JSON.stringify(original))
// const copy = structuredClone(original)
