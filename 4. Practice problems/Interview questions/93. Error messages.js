/*Error Messages
Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.

The input error will be 1 to 5:

1 >> "Check the fan"
2 >> "Emergency stop"
3 >> "Pump Error"
4 >> "c"
5 >> "Temperature Sensor Error"
*/

const error = n =>
  n === 1
    ? 'Check the fan: e1'
    : n === 2
    ? 'Emergency stop: e2'
    : n === 3
    ? 'Pump Error: e3'
    : n === 4
    ? 'c: e4'
    : n === 5
    ? 'Temperature Sensor Error: e5'
    : 101

console.log(error(1))
