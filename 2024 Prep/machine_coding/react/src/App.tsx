import './App.css'
import { BatchingStates } from './components'

function App() {
  return (
    <div className="container">
      <h1>Vite + React</h1>
      <div>{/* <FileExplorer data={fileExplorerData} /> */}</div>
      <BatchingStates />
    </div>
  )
}

export default App
