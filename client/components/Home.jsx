import React from 'react'

//subcomponents
import About from './About'
import BlankSpace from './BlankSpace'


const Home = () => {
  return (
    <div className='home'>

      <About />
      <BlankSpace />

      <div className="article">

        <h3>
          Picture
      </h3>
        <h5>Of The Day:</h5>
        <img className="articleimg" src="https://static1.squarespace.com/static/53246668e4b097bd81719d73/53aefdd1e4b034188ca5a7cc/5754b61ff85082f641d9b621/1465170754534/Flag_JackWave.jpg?format=1500w"></img>

      </div>

      <div className="article2">
        <br />
        <br />
        <br />

      </div>

      <div className="article">

        <h3>
          Quote
      </h3>
        <h5>Of The Day:</h5>
        <p className="parabox" id="quote">
          "Believing you are unworthy of love and belonging — that who you are authentically is a sin or is wrong — is deadly. Who
        you are is beautiful and amazing." -
        <i id="quote">Laverne Cox</i>
        </p>
      </div>
      <div className="article2">
        <br />
        <br />
        <br />



      </div>



      <div className="row">
        <div className="eight columns">
          <h5 className="footertxt">
            Made by Hayden , 2018
            </h5>
        </div>

        <div className="four columns">

          <h5 className="footertxt"><a className="footertxt" href="https://github.com/hayden-malan">GitHub</a> | <a className="footertxt" href="https://keep--cool.tumblr.com">Tumblr</a> |
              <a className="footertxt" href="https://hayden-malan.github.io/projectShark/sharks.html">SharkQuiz</a>
          </h5>
        </div>
      </div>






    </div>
  )
}

export default Home