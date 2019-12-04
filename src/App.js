import React, { useState, useEffect } from "react"
import './App.css'

const App = () => {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [isTimeRunning, setIsTimeRunning] = useState(false)

  const handleChange = (e) => {
    const { value } = e.target
    setText(value)
  }

  const calculateWordCount = (text) => {
    const wordsArr = text.trim().split(" ")
    const filteredWords = wordsArr.filter(word => word !== "")
    return filteredWords.length
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    } else if (timeRemaining === 0) {
      setIsTimeRunning(false)
    }
  }, [timeRemaining, isTimeRunning])

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={() => setIsTimeRunning(true)}>Start</button>
      <h1>Word count: ???</h1>
    </div>
  )
}

export default App
