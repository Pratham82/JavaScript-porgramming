// ES6: Use export to Share a Code Block

/* 
When you export a variable or function, you can import it in another file and use 
it without having to rewrite the code

You can export multiple things by placing them all in the export statement 

export { add, subtract };
*/

// There are two string-related functions in the editor. Export both of them using the method of your choice.



const uppercaseString = (string) => {
    return string.toUpperCase();
}
  
  const lowercaseString = (string) => {
    return string.toLowerCase()
}

export {uppercaseString, lowercaseString}