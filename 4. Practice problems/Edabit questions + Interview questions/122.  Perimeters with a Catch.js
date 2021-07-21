// Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.

// Examples
// perimeter("s", 7) ➞ 28

// perimeter("c", 4) ➞ 25.12

// perimeter("c", 9) ➞ 56.52

const perimeter = (l, num) => (l == 's' ? num * 4 : 6.28 * num)

console.log(perimeter('s', 7))
