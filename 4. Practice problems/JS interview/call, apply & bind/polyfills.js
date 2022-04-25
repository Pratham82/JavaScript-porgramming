//* bind
Function.prototype.myBind = function (obj, ...bindArgs) {
  const funcRef = this

  return function (...funcArgs) {
    return funcRef.apply(obj, [...bindArgs, ...funcArgs])
  }
}

const isEligible = function (degree) {
  if (this.age >= 18 && degree === 'BE') {
    return `${this.name} is eligible`
  }
}

const jake = {
  name: 'jake',
  age: 20,
}

const isEligibleCopy2 = isEligible.myBind(jake, 'BE')
console.log(isEligibleCopy2())

//* call
Function.prototype.myCall = function () {
  console.log(this)
}

isEligible.myCall()
