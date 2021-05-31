//Numbers to Objects
//Given an array of numbers arr:
//
//Create an object against each given number.
//The object key will be the number converted string.
//The value will be the corresponding character code converted string (check ASCII table).
//Return an array of the resulting objects.
//Examples
//numObj([118, 117, 120]) ➞ [{'118':'v'}, {'117':'u'}, {'120':'x'}]



let data =  100
console.log(`${data} sdsd`)
const numObj = arr => arr.map((val,a,i) =>{
	let obj = {}
	obj[val] = `${String.fromCharCode(val)}`
	return obj
})

console.log(numObj([118, 117, 120,233]))
