import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

//components
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'
//pages
import Home from './Home'
import Resources from './Resources'
import Gallery from './Gallery'
import Questions from './Questions'
import Positivity from './Positivity'
//resources
import FTM from './FTM'
import MTF from './MTF'
import Questioning from './Questioning'
import NonBinary from './NonBinary'
import Parents from './Parents'

const App = () => {
  return (
    <Router>
      <div className='app'>

          <div className='container'>

            <Header />
            <NavBar />

            <Route exact path='/' component={Home} />
            <Route exact path='/resources' component={Resources} />
            <Route exact path='/gallery' component={Gallery} />
            <Route exact path='/questions' component={Questions} />
            <Route exact path='/positivity' component={Positivity} />
            {/* resource routes */}
            <Route exact path='/resources/FTM' component={FTM} />
            <Route exact path='/resources/MTF' component={MTF} />
            <Route exact path='/resources/questioning' component={Questioning} />
            <Route exact path='/resources/nonbinary' component={NonBinary} />
            <Route exact path='/resources/parents' component={Parents} />
            <Footer />
            
          </div>
      </div>
    </Router>
  )
}

export default App
