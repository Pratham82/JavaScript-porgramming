//According to the lodash documentation, _.dropRight Creates a slice of an array with n elements dropped from the end.

//This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

const dropRight = (arr, num = 1) => arr.splice(0, arr.length - num)
console.log(dropRight([1, 2, 3], 2))
console.log(dropRight([1, 2, 3], 5))
console.log(dropRight([1, 2, 3], 0))

// Testing
console.log(['dave', 'joey', 'mark', 'ross'].splice(0, 5))
