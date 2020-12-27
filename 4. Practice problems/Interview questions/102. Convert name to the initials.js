// With given return the initials
// ex. getInitials('Prathamesh Mali') -> P.M.

const getInitials = fullName =>
  fullName
    .split(' ')
    .map(name => name[0])
    .join('.')

console.log(getInitials('Sachin Tendulkar'))
