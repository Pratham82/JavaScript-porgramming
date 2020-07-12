// Dates and time

let val; 

// If we don't pass any parameters then by default date will be today's date.
const today = new Date()  // Output: Sat Jun 06 2020 16:25:54 GMT+0530 (India Standard Time)

val = today.toString()

// Setting a specific date
let d_day=  new Date('8-9-1997')
d_day=  new Date('8/9/1997')
d_day=  new Date('August 9 1997')
d_day=  new Date('8-9-1997')

// Setting a specific date with time
d_day=  new Date('8-9-1997 12:50:00')

// Fetching individual value from date
val = today.getDate()          // Returns current day i.e 6 of 30 days
val = today.getDay()           // Returns 6 , days have 0 based indexing as well and its saturday.
val = today.getMonth()         // Returns 5 because months have 0 based indexing.
val = today.getFullYear()      // Reruns 2020
val = today.getHours()         // Returns 16 because it 4.00 PM now
val = today.getMinutes()       // Returns 39
val = today.getSeconds()       // Returns 51
val = today.getMilliseconds()  // Returns 315
val = today.getTime()          // Returns 1591441794965 i.e amount of time passed since 1970 

d_day.setMonth(6)           // This will set the month to July 
d_day.setDate(23)           // This will set the date to 23
d_day.setFullYear(2000)     // This will set the year to 2000
d_day.setMinutes(20)        // This will set the minutes tp 20
d_day.setSeconds(35)        // This will set the seconds to 35 
d_day.setMilliseconds(350)  // This will set the milliseconds to 350

console.log(val);
console.log(d_day);       //OP Sun Jul 23 2000 12:20:35 GMT+0530 (India Standard Time)
console.log(typeof val);  // Date is also type of object