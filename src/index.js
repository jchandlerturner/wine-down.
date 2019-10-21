import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import WineDown from './components/WineDown'

ReactDOM.render(
  <Router>
    <WineDown />
  </Router>
  , document.getElementById('root'))
