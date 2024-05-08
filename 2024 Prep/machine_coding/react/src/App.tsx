import './App.css'
import { CountDownTimer } from './components'

function App() {
  return (
    <div className="container">
      <h1>Vite + React</h1>
      <CountDownTimer seconds={20} />
    </div>
  )
}

export default App
