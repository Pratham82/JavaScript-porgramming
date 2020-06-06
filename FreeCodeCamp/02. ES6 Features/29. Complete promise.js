// ES6: Complete a Promise with resolve and reject

/*
* A promise has three states: pending, fulfilled, and rejected. 
* resolve is used when you want your promise to succeed
* reject is used when you want it to fail.

example:
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});

The example above uses strings for the argument of these functions, but it can 
really be anything. Often, it might be an object, that you would use data from,
to put on your website or elsewhere.
*/

/*
Make the promise handle success and failure. If responseFromServer is true, call 
the resolve method to successfully complete the promise. Pass resolve a string 
with the value We got the data. If responseFromServer is false, use the reject 
method instead and pass it the string: Data not received.
*/

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    //let responseFromServer = false;
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data")
    } else {  
      reject("Data not received")
    }
});

console.log(makeServerRequest);  // Promise {<resolved>: "We got the data"}
  
