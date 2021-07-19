const vowelsAndConsonants = (s) =>
  s
    .split('')
    .filter((v) => ['a', 'e', 'i', 'o', 'u'].includes(v))
    .concat(s.split('').filter((v) => !['a', 'e', 'i', 'o', 'u'].includes(v)))
    .map((v) => console.log(v))

console.log(['j', 'a'].includes('j'))
vowelsAndConsonants('javascriptloops')
