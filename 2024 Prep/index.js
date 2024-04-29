// {
//   var a = 10
//   let b = 100
//   const c = 1000
// }

// console.log(a)
// console.log(b) // Reference Error since variable declare with let is block scoped
// console.log(c) // Reference Error since variable declare with const is block scoped

var length = 10

function fn() {
  console.log(this.length)
}

fn()

var obj2 = {
  length: 5,
  method: function (fn) {
    fn()
    // console.log(arguments[0]())
    arguments[0]()
  },
}

// obj2.method(fn, 1)
;(function () {
  console.log(1)
  setTimeout(function () {
    console.log(2)
  }, 1000)
  setTimeout(
    (function () {
      console.log(3)
    })(),
    3000
  )
  console.log(4)
})()
