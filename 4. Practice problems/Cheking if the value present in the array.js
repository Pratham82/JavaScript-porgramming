function valueChecker(val){
    return [45,454,8,784,110].includes(val)?'Value is present':'value is not present'
}

console.log(valueChecker(7778));


// Using arrow function
const Val_Check =  (val) => [45,454,8,784,110].includes(val)

console.log(Val_Check(999));