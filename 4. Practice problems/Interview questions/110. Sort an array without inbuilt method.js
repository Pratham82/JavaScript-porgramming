// Sort a given array without using the inbuilt method

const sortArr = (arr) => {
  let temp = 0
  let done = false
  while (!done) {
    done = true
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i - 1] > arr[i]) {
        done = false
        temp = arr[i - 1]
        arr[i - 1] = arr[i]
        arr[i] = temp
      }
    }
  }
  return arr
}

console.log(sortArr([23, 465, 5, 12, 56, 45]))
