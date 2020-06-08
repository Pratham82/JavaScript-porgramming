// Window is the global object in client side JS
// In client side JS window or the browser is the global environment
// Node js is the standalone runtime environment and your PC is the environment for running thr JS.

console.log(window);  // This will return all the methods which are available with window

// Window methods objects and properties

// window.console.log('test')

//Alert 
// window.alert("Testing alert")

//Prompt
// val = window.prompt("Enter var value")
// console.log(val);

//Confirm


// if(confirm("test confirm"))
//     console.log('You accepted request');
// else
//     console.log('You rejected request');

//console.log(confirm("test confirm")?'You accepted request':'You rejected request');

// Get outer height and width of the window
val = window.outerHeight
val = window.outerWidth
console.log(val);

// Get inner height and width of the window
val = window.innerHeight
val = window.innerWidth

// Scroll points
val = window.scrollY // Gives vertical scroll bar
console.log(val);

// Location object
val = window.location
val = window.location.host
val = window.location.hostname
val = window.location.port
val = window.location.href      // for link
val = window.location.search    // Returns the query entered in ?

// Redirect
// window.location.href = 'https://www.github.com' // Redirects the current page to target page

// Reload
// window.location.reload() // This will keep reloading the page

// History object
//window.history.go()

// Navigator object
val = window.navigator
val = window.navigator.geolocation
val = window.navigator.platform
val = window.navigator.appName
val = window.navigator.appVersion
val = window.navigator.vendor
val = window.navigator.language


console.log(val);

