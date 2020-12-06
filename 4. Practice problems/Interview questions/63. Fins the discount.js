//Find the Discount
//Create a function that takes two arguments: the final price and the discount as integers and returns the final price after the discount.

const dis = (price, discount) =>
  Number((price - (price * discount) / 100).toFixed(2));
console.log(dis(1500, 50));
console.log(dis(100, 75));
console.log(dis(593, 61));
