//Time Conversion
//Write a function that takes the number of seconds and returns the digital format clock time as a string. Time should be counted from 00:00:00.
//
//Examples
//digitalClock(5025) ➞ "01:23:45"
//// 5025 seconds is 1 hour, 23 mins, 45 secs.
//
//digitalClock(61201) ➞ "17:00:01"
//// No AM/PM. 24h format.
//
//digitalClock(87000) ➞ "00:10:00"
//// It's 00:10 next day.

const digitalClock = (sec) => new Date(sec * 1000).toISOString().substr(11, 8);

console.log(digitalClock(5025));
