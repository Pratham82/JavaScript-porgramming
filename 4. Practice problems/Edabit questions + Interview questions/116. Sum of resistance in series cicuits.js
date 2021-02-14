/*
Sum of Resistance in Series Circuits
When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:

RT = R1 + R2 + R3 ...
Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

  */

const seriesResistance = arr => {
  const sum = arr.reduce((n1, n2) => n1 + n2)
  return sum > 1 ? `${sum} ohms` : `${sum} ohm`
}

console.log(seriesResistance([1, 5, 6, 3]))
console.log(seriesResistance([16, 3.5, 6]))
console.log(seriesResistance([0.5, 0.5]))
