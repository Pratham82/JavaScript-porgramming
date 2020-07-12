// ES6: Create an Export Fallback with export default

// Usually you will use this syntax if only one value is being exported from a file.
// It is also used to create a fallback value for a file or module.

/*
Since export default is used to declare a fallback value for a module or file, 
you can only have one value be a default export in each module or file.
Additionally, you cannot use export default with var, let, or const
*/

// The following function should be the fallback value for the module. Please add the necessary code to do so.

export default function subtract(x, y) {
    return x - y;
}
  