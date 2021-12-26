function outerFunc() {
  let outerVar = 'I am outside!'
  function innerFunc() {
    // Here the innerFunction will closes over the outerVar(remembers outerVar value),
    // which is present in the lexical scope of innerFunc, so it can used anywhere
    console.log(outerVar) // => logs "I am outside!"
  }
  return innerFunc
}

// function for execution
function exec() {
  /*
   * Here the lexical scope of innerFunction is changed
   * Still it will remember the value of outerVar from the outerFunc i.e called closure

   * The function will store/ remembers the value of variable defined in the lexical scope, even though of its lexical scope is changes
  */
  const myInnerFunc = outerFunc()
  myInnerFunc()
}

exec() // logs "I am outside"
