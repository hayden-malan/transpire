import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

//components
import Home from './Home'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <h1>WTo Transpire</h1>

          <div className='container'>
            <Route exact path='/' component={Home} />
          </div>
      </div>
    </Router>
  )
}

export default App
