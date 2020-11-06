/*
Snail Goes Up the Stairs

A snail goes up the stairs. Every step, he must go up the step, then go across to the next step. He wants to reach the top of the tower.

Write a function that returns the distance the snail must travel to the top of the tower given the height and length of each step and the height of the tower.
Examples

totalDistance(0.2, 0.4, 100.0) ➞ 300.0
// Total distance is 300.

totalDistance(0.3, 0.2, 25.0) ➞ 41.7

totalDistance(0.1, 0.1, 6.0) ➞ 12.0
*/

const totalDistance = (height, length, tower) => {
  const steps = tower / height
  const length2 = steps * height + steps * length
  return Math.round(length2 * 10) / 10
}
console.log(totalDistance(0.2, 0.4, 100.0))
