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

            <div className="row">
              <div className="nine columns">
                <h1>
                  Welcome To Transpire
                </h1>
                <h3>
                  Educating, Motivating, Connecting
                </h3>
              </div>
              <div className="three columns">
                <img className="logo" src="http://files.pfaw.org/uploads/2017/07/1280px-Transgender_Pride_flag-800x458.png"></img>
              </div>
            </div>




            <div className="navbar">
              <div className="row">

                <div className="two columns">
                  <div className="dropdown">
                    <button className="dropbtn">
                      HOME
                    </button>
                      <div className="dropdown-content">
                        <a href="#">Go Home</a>
                        <a href="#">Quote</a>
                        <a href="/">Picture</a>
                      </div>
                  </div>
                </div>

                <div className="two columns">
                  <div className="dropdown">
                    <button className="dropbtn">
                      RESOURCES
                    </button>
                      <div className="dropdown-content">
                        <a href="#/resources">View All</a>
                        <a href="#/resources">FTM</a>
                        <a href="#/resources">MTF</a>
                        <a href="#/resources">Questioning</a>
                        <a href="#/resources">Nonbinary</a>
                        <a href="#/resources">Parents</a>
                      </div>
                  </div>
                </div>

                <div className="two columns">
                  <div className="dropdown">
                    <button className="dropbtn">
                      GALLERY
                    </button>
                      <div className="dropdown-content">
                        <a href="#">Post</a>
                        <a href="#">Search</a>
                        <a href="#">View All</a>
                      </div>
                  </div>
                </div>

                <div className="two columns">
                  <div className="dropdown">
                    <button className="dropbtn">
                      QUESTIONS
                    </button>
                      <div className="dropdown-content">
                        <a href="#">Ask</a>
                        <a href="#">Search</a>
                        <a href="#">View All</a>
                        <a href="#">Contact Us</a>
                      </div>
                  </div>
                </div>

                <div className="two columns">
                  <div className="dropdown">
                    <button className="dropbtn">
                      POSITIVITY
                    </button>
                      <div className="dropdown-content">
                        <a href="#">Post</a>
                        <a href="#">Search</a>
                        <a href="/">View All</a>
                      </div>
                  </div>
                </div>
           
              </div>
            </div>


            <Route exact path='/' component={Home} />
            <Route exact path='/resources' component={Resources} />
            <Route exact path='/gallery' component={Gallery} />



          </div>
      </div>
    </Router>
  )
}

export default App
