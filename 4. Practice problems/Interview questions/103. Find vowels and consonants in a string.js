// How to calculate the number of vowels and consonants in a string?

let results = {
  consonants: [],
  vowels: [],
}

const findVowelsAndConsonants = str =>
  str
    .split('')
    .map(c =>
      ['a', 'e', 'i', 'o', 'u'].includes(c)
        ? results.consonants.push(c)
        : results.vowels.push(c)
    )

console.log(findVowelsAndConsonants('apple'))
console.log(results)
