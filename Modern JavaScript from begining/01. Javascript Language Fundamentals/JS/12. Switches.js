// Switch cases

let degree

degree = 'MBA'

switch(degree){
    case 'BE':
        console.log(`${degree} is takes 4 years to complete`);
        break
    case 'BSc':
        console.log(`${degree} is takes 3 years to complete`);
        break
    case 'BA':
        console.log(`${degree} is takes 3 years to complete`);
        break
    case 'BCom':
        console.log(`${degree} is takes 3 years to complete`);
        break
    case 'MBA':
        console.log(`${degree} is takes 2 years to complete`);
        break
    default:
        console.log('Please enter correct degree');
}

// Switch case which represents the days of week

day =  new Date().getDay()
console.log(day);

switch(day){
    case 0:
        day = 'Sunday'
        break
    case 1:
        day = 'Monday'
        break
    case 2:
        day = 'Tuesday'
        break
    case 3:
        day = 'Wednesday'
        break
    case 4:
        day = 'Thursday'
        break
    case 5:
        day = 'Friday'
        break
    case 6:
        day = 'Saturday'
        break
}

console.log(`Today is ${day}`); // Today is Saturday