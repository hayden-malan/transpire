import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

//components; main
import Home from './Home'
import Resources from './Resources'
import Gallery from './Gallery'
//subcomponents

const App = () => {
  return (
    <Router>
      <div className='app'>
        

          <div className='container'>
            <Route exact path='/' component={Home} />
            <Route exact path='/resources' component={Resources} />
            <Route exact path='/gallery' component={Gallery} />



          </div>
      </div>
    </Router>
  )
}

export default App
