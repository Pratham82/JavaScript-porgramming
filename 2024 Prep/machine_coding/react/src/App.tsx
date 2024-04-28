import './App.css'
import { FileExplorer } from './components'
import { fileExplorerData } from './data'

function App() {
  return (
    <div className="container">
      <h1>Vite + React</h1>
      <div>
        <FileExplorer data={fileExplorerData} />
      </div>
    </div>
  )
}

export default App
