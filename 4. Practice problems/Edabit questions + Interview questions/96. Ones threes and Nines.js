//Given an int, figure out how many ones, threes and nines you could fit into the number. You must create a class. You will make variables (class.ones, class.threes, class.nines) to do this.

class OnesThreesNines {
  constructor(n) {
    this.nines = Math.floor(n / 9)
    this.threes = Math.floor(n / 3)
    this.ones = Math.floor(n / 1)
  }
}

const n1 = new OnesThreesNines(5)
const n2 = new OnesThreesNines(15)
const n3 = new OnesThreesNines(20)
console.log(n1.nines)
console.log(n1.threes)
console.log(n1.ones)

console.log(n3.ones)
