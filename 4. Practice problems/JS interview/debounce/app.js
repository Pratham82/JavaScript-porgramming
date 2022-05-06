function test() {
  console.log('app js ')
}

const getData = () => {
  console.log('Get Data..')
}

const debounce = (callback, delay) => {
  let timer
  return function (...args) {
    if (timer) clearTimeout(timer)
    setTimeout(() => callback(), delay)
  }
}

const debouncedFunction = debounce(getData, 1000)

// debounce
// function debounceNew(func, wait, immediate) {
//   var timeout

//   return function executedFunction() {
//     var context = this
//     var args = arguments

//     var later = function () {
//       timeout = null
//       if (!immediate) func.apply(context, args)
//     }

//     var callNow = immediate && !timeout

//     clearTimeout(timeout)

//     timeout = setTimeout(later, wait)

//     if (callNow) func.apply(context, args)
//   }
// }
