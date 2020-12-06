/*Volume of a Cone
Create a function that takes the height and radius of a cone as arguments and returns the volume of the cone rounded to the nearest hundredth.
*/

const coneVolume = (h, r) =>
  Number(((1 / 3) * Math.PI * r ** 2 * h).toFixed(2));

console.log(coneVolume(3, 2));
