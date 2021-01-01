// Make a pyramid with stars

const printPyramid = (n) => {
  let output = ''
  for (let i = 1; i <= n; i++) {
    output += '*'
    console.log(output + ' ')
  }
}

printPyramid(10)
