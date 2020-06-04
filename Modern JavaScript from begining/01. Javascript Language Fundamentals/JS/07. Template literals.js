const firstName = 'John'
const lastName = 'Snow'
const job = 'NightWatcher'
const age = 35
const city = 'Mumbai'
let html;

// Adding HTML with JS without template strings

html = '<ul>'+
        '<li> First name:'+firstName +'</li>'+
        '<li> Last name: '+ lastName +'</li>'+
        '<li>Job: '+ job +'</li>'+
        '<li>Age: '+ age +'</li>'+
        '<li>Address: '+ city +'</li>'+
        '</ul>';

// Adding HTML in JS with template strings/literals ES6 feature

var fun1 = () => "Hello this is function1👋"

// Using back ticks

html =
    `<ul style="list-style:square">
       <li>First name: ${firstName}</li> 
       <li>Last name: ${lastName}</li> 
       <li>Age: ${age}</li> 
       <li>Address: ${city}</li> 
       <li>${10+5}</li> 
       <li>${fun1()}</li>    
       <li>${age>18?"You're eligible to drink":"You're too young!!"}</li>    
    </ul>`

document.body.innerHTML = html;







