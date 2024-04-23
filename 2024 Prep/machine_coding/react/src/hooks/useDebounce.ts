import { useState, useEffect } from 'react'

const useDebounce = <T>(callBack: T, delay = 500) => {
  const [debouncedText, setDebouncedText] = useState<string>('')

  useEffect(() => {
    // * add delay for setting the valye
    const timeOut = setTimeout(() => {
      setDebouncedText(debouncedText)
    }, delay)

    // * run clearTimeout in a cleanup function
    return () => clearTimeout(timeOut)
  }, [debouncedText, delay])
}
export { useDebounce }
