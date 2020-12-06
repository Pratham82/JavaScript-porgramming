//Burglary Series (14): Adjectives Total
//You call your spouse in anger and a "little" argument takes place. Count the total amount of adjectives used. Given an object with a list of adjectives, return the total amount of adjectives used.

const totalAmountAdjectives = (obj) => Object.values(obj).length;

console.log(totalAmountAdjectives({ a: "moron" }));
