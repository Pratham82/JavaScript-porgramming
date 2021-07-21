// Create a function that calculates the missing value of 3 inputs using Ohm's law. The inputs are v, r or i (aka: voltage, resistance and current).

// Ohm's law:

// V = R * I

// ohmsLaw(230, "", 2) ➞ 115

// ohmsLaw("", 220, 0.02) ➞ 4.4

// ohmsLaw("", "", 10) ➞ "Invalid"

const ohmsLaw = (v, r, i) => {
  let op = 0
  op =
    v && r && i
      ? 'Invalid'
      : !v && !r
      ? 'Invalid'
      : !r && !i
      ? 'Invalid'
      : !v && !i
      ? 'Invalid'
      : v && r
      ? Number((op = (v / r).toFixed(2)))
      : v && i
      ? (op = v / i)
      : r && i
      ? r * i
      : 'Invalid'
  return op
}
let x, y, z

console.log(ohmsLaw(12, 220, ''))

class Rectangle {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }
  toString() {
    return `[x=${this.x}, y=${this.y} width=${this.width}, height=${this.height}]`
  }
}
let obj = new Rectangle(11, 11, 13, 43)
console.log(obj)
console.log(obj.toString())
