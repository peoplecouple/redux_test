import React from 'react'
import { useSelector } from 'react-redux'
import Sub from './Sub'
import "./dark.scss"
const App = () => {
  const { mode } = useSelector(state => state)
  return (
    <div className={`App ${mode ? "on" : ""}`}>
      <Sub />
    </div>

  )
}

export default App
