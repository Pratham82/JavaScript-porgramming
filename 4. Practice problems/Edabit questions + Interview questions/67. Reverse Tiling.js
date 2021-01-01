//Reverse Titling
//Your stereotypical titleCase() function in JavaScript might capitalises the first letter of every word in a
//given sentence, leaving all the other letters as lowercase.
//
//The goal of this challenge, however, is to create a reverseTitle() function, which achieves the complete
//opposite! Make the first letter of every word lowercase, and the rest uppercase!

const reverseTitle = (word) =>
  word
    .split(" ")
    .map(
      (c) => `${c.substring(0, 1).toLowerCase()}${c.substring(1).toUpperCase()}`
    )
    .join(" ");

console.log(reverseTitle("this is a title"));
