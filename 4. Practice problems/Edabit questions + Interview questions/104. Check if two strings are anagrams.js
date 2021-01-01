// Check if two strings are anagrams

const isAnagram = (str1, str2) =>
  str1.length === str2.length &&
  str1
    .split('')
    .sort()
    .map((el, i) => str2.split('').sort()[i] === el)
    .every(e => e === true)

console.log(isAnagram('night', 'thing'))
console.log(isAnagram('listen', 'silent'))
console.log(isAnagram('aaa', 'tar'))
