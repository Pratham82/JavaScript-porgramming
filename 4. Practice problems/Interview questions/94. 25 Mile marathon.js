/*
 25-Mile Marathon
Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.

Return true if the marathon is 25 miles long, otherwise, return false.
*/

const marathonDistance = d =>
  d.length > 0 ? d.map(n => Math.abs(n)).reduce((a, b) => a + b) === 25 : false

console.log(marathonDistance([1, 2, 3, 4]))
console.log(marathonDistance([1, 9, 5, 8, 2]))
