import React, { useState } from "react"
import './App.css'

const App = () => {
  const [text, setText] = useState("")

  const handleChange = (e) => {
    const { value } = e.target
    setText(value)
  }

  const calculateWordCount = (text) => {
    const wordsArr = text.trim().split(" ")
    const filteredWords = wordsArr.filter(word => word !== "")
    return filteredWords.length
  }

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: ???</h4>
      <button onClick={() => calculateWordCount(text)}>Start</button>
      <h1>Word count: ???</h1>
    </div>
  )
}

export default App
