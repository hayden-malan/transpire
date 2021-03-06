import React from 'react'

const NavBar = () => {

  return (
    <div className="navbar">
      <div className="row">

        <div className="two columns">
          <div className="dropdown">
            <button className="dropbtn">
              HOME
                    </button>
            <div className="dropdown-content">
              <a href="#">Go Home</a>
              {/* <a href="#">Quote</a>
              <a href="/">Picture</a> */}
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
              <a href="#/resources/FTM">FTM</a>
              <a href="#/resources/MTF">MTF</a>
              <a href="#/resources/questioning">Questioning</a>
              <a href="#/resources/nonbinary">Nonbinary</a>
              <a href="#/resources/parents">Parents</a>
            </div>
          </div>
        </div>

        <div className="two columns">
          <div className="dropdown">
            <button className="dropbtn">
              GALLERY
                    </button>
            <div className="dropdown-content">
              {/* <a href="#">Post</a>
              <a href="#">Search</a> */}
              <a href="#/gallery">View All</a>
            </div>
          </div>
        </div>

        <div className="two columns">
          <div className="dropdown">
            <button className="dropbtn">
              QUESTIONS
                    </button>
            <div className="dropdown-content">
            <a href="#/questions">Preview</a>
              {/* <a href="#">Ask</a>
              <a href="#">Search</a>
              <a href="#">View All</a>
              <a href="#">Contact Us</a> */}
            </div>
          </div>
        </div>

        <div className="two columns">
          <div className="dropdown">
            <button className="dropbtn">
              POSITIVITY
                    </button>
            <div className="dropdown-content">
            <a href="#/positivity">Preview</a>
              {/* <a href="#">Post</a>
              <a href="#">Search</a>
              <a href="/">View All</a> */}
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}


export default NavBar