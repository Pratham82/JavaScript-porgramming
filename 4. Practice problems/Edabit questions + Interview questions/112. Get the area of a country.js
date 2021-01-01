const areaOfCountry = (name, area) =>
  `${name} is ${((100 * area) / 148940000).toFixed(
    2
  )}% of the total world's landmass`

console.log(areaOfCountry('Russia', 17098242))
