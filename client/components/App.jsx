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

            <Footer />
            
          </div>
      </div>
    </Router>
  )
}

export default App
