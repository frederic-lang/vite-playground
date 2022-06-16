import { useState } from 'react'
import { autoEditClient } from 'vite-plugin-autoedit'
import countJSON from './count.json'

function App() {
  const [count, setCount] = useState(countJSON.count)
  const ae = autoEditClient()

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <>
        {ae &&
        <button onClick={()=>{ae.save("./src/count.json",{count})}}>
          Save
        </button>
        }
          </>
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