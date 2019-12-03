import React from "react"
import './App.css'
/**
 * Challenge: Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change
 */

function App() {
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea />
      <h4>Time reminaing: ???</h4>
      <button>Start</button>
      <h1>Word count: ???</h1>
    </div>
  )
}

export default App
