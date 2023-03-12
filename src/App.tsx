import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const getURL = chrome.runtime.getURL ?? ((path: string) => path)

const reactLogoUrl = getURL(reactLogo);
const viteLogoUrl = getURL("/vite.svg")

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogoUrl} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogoUrl} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + CRXJS</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
