//Derivative of a Function
//Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.

const derivative = (b, m) => {
  var x = m
  return b * Math.pow(x, b - 1)
}

console.log(derivative(3, -2))
console.log(derivative(1, 4))
console.log(derivative(4, -3))

/*
x = m
f(x) =  x^b
b * x ^b-1

  */
