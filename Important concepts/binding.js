// const module = {
//   x: 42,
//   getX: function() {
//     return this.x;
//   }
// };

// const unboundGetX = module.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope
// // expected output: undefined

// const boundGetX = unboundGetX.bind(module);
// console.log(boundGetX());
// // expected output: 42

// const normalCopy = module.getX;
// //const boundedCopy = normalCopy.bind(module)

// console.log(normalCopy()) // Returned undefined because the function is getting the global value provided in its
// //parent function and we are not providing it

const value_holder = {
  value: 100,
  getValue: function () {
    return this.value
  },
}

// Accessing the getValue
const getValueCopy = value_holder.getValue

console.log(getValueCopy()) // Undefined

const getBoundedCopy = getValueCopy.bind(value_holder)
console.log(getBoundedCopy()) // 100

const fin_val = value_holder.getValue()
console.log(fin_val)
