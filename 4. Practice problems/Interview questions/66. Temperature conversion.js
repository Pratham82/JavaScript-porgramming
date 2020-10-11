// Temperature conversion

//Write a program that takes a temperature input in celsius and converts it to Fahrenheit and Kelvin. Return the converted temperature values in an array.

const tempConversion = (c) => {
  const F = Number(((c * 9) / 5 + 32).toFixed(2));
  const K = Number((c + 273.15).toFixed(2));

  return K > 0 ? [F, K] : "Invalid";
};

console.log(tempConversion(100));
