const RemoveDuplicates = arr => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(RemoveDuplicates([11, 12, 13, 14, 11, 11]))
