// Basic JavaScript: Testing Objects for Properties

// Modify the function checkObj to test if an object passed to the function (obj)
// contains a specific property (checkProp). If the property is found, return 
// that property's value. If not, return "Not Found".


function checkObj(obj, checkProp) {
    // Only change code below this line
    var val1 = obj.hasOwnProperty(checkProp)
    if (val1){
        return obj[checkProp]
    }else{
        return "Not Found"
    }
    // Only change code above this line
}
  

    
   
obj1 ={gift: "pony", pet: "kitten", bed: "sleigh"}

console.log(checkObj(obj1,'gift'));

// val1 = obj1.hasOwnProperty('giftdfg')
// console.log('val1:', val1)
// if (val1){
//     console.log(obj1.gift)
// }
// else{
//     console.log("Not found")
// }