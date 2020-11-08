/*
Count Number of Instances
Create a class named User and create a way to check the number of users (number of instances) were created, so that the value can be accessed as a class attribute.

Examples
u1 = User("johnsmith10")
User.userCount ➞ 1

u2 = User("marysue1989")
User.userCount ➞ 2

u3 = User("milan_rodrick")
User.userCount ➞ 3
*/

class User {
  static userCount = 0
  constructor(val) {
    this.username = val
    User.userCount++
  }
}
let u1 = new User('Prathamesh')
let u2 = new User('Joey')
let u3 = new User('James')

console.log(u1.username)
console.log(User.userCount)

/*
function MyObj() {
  MyObj.instances = (MyObj.instances || 0) + 1
}

let a1 = new MyObj()
let a2 = new MyObj()
console.log(User.instances)
*/
