//Pythagorean Triplet
//Create a function that validates whether three given integers form a Pythagorean triplet.
//	The sum of the squares of the two smallest integers must equal the square of the
//largest number to be validated.

const isTriplet = (n1, n2, n3) => {
  const arr = [n1, n2, n3].sort((a, b) => a - b);
  return arr[0] ** 2 + arr[1] ** 2 === arr[2] ** 2;
};

console.log(isTriplet(13, 5, 12));
