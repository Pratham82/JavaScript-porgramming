let nest = [
  [11, 12, 13, [23, 355, 67, 67]],
  [14, 15, 16, [34, 456, 5657, 7]],
  [17, 18, 19, [34545, 45, 23, 78]],
]

// Output should be
// [
//      23, 355,   67, 67,
//      34, 456, 5657,  7,
//   34545,  45,   23, 78
// ]

let fin = []
for (let i = 0; i < nest.length; i++) {
  for (let j = 0; j < nest[i].length; j++) {
    for (let k = 0; k < nest[i][j].length; k++) {
      fin.push(nest[i][j][k])
    }
  }
}

console.log(fin)
