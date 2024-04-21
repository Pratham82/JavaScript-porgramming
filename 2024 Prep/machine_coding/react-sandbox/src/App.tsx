import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFetch } from './hooks'
import { Loader } from './components'

function App() {
  const { data, isLoading, isError } = useFetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  )

  if (isLoading) {
    return <Loader />
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div>
        {data.map(({ id, title }) => (
          <div key={id}>{title}</div>
        ))}
      </div>
    </>
  )
}

export default App
