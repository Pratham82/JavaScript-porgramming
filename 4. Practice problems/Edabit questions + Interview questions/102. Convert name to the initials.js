// With given return the initials
// ex. getInitials('Prathamesh Mali') -> P.M.

const getInitials = (fullName) =>
  fullName
    .split(' ')
    .map((name) => name[0])
    .join('.')

const getInitials2 = (fullName) =>
  fullName
    .split(' ')
    .map((name) => name[0] + '.')
    .join(' ')

console.log(getInitials('Sachin Tendulkar'))
console.log(getInitials2('Sachin Ramesh Tendulkar'))
