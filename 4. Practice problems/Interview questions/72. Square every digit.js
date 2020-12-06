//Square Every Digit
//Create a function that squares every digit of a number.

const squareDigits = (n) =>
  Number(
    String(n)
      .split("")
      .map((n) => n ** 2)
      .join("")
  );
console.log(squareDigits(9119));
