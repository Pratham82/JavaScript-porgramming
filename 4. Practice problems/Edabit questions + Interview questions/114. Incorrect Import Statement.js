// Incorrect Import Statement
// When importing objects from a module in Python, the syntax usually is as follows:

// from module_name import object
// Given a string of an incorrect import statement, return the fixed string. All import statements will be the wrong way round.

// Examples
// fixImport("import object from module_name") ➞ "from module_name import object"

const fixImport = (str) =>
  `from ${str.split('from')[1]} ${str.split(' from')[0]}`

console.log(fixImport('import object from module_name'))

console.log(['a', 'b', 'c'].reverse())
console.log('import obj from moddd'.split(' from'))
