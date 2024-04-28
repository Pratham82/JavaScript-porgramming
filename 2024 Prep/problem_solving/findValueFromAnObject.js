// Write a Function getValue that will take a dot string and an object and it will return its value in object

// If value doesn’t exist return undefined

let nestedObject = {
  a: {
    b: {
      c: {
        d: 'Hello D',
      },
    },
  },
}
let nestedObject2 = {
  a: {
    b: {
      c: {
        d: 'Hello D',
      },
    },
  },
}

// getValue(nestedObject, "a.b.c.d"); // OP: "Hello D"
// getValue(nestedObject2, "a.b.c.d.E"); // OP: undefined
//  console.log(nestedObject.a.b.c.d)

const findNestedValueFromObj = (obj, retrievalString) => {
  const keys = retrievalString.split('.')
  // * create new obj with the input obj
  let finalObj = obj
  // loop over keys,
  for (const key of keys) {
    // * check if the type of key along with given obj is object and key is present in that object
    if (typeof finalObj === 'object' && key in finalObj && finalObj != null) {
      finalObj = finalObj[key]
    } else {
      return undefined
    }
  }
  return finalObj
}

const res2 = findNestedValueFromObj(nestedObject2, 'a.b.c.d')
