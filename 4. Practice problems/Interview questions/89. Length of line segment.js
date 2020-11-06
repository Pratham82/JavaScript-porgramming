/*
Geometry 1: Length of Line Segment

Write a function that takes coordinates of two points on a two-dimensional plane and returns the length of the line segment connecting those two points.
Examples

lineLength([15, 7], [22, 11]) ➞ 8.06

lineLength([0, 0], [0, 0]) ➞ 0
*/

const lineLength = ([x1, y1], [x2, y2]) =>
  Number(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)).toFixed(2))

console.log(lineLength([15, 7], [22, 11]))
