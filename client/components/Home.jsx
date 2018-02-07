import React from 'react'

const Home = () => {
  return (
    <div className='home'>
     





   
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
        <div className="three columns">
          <div className="dropdown">
            <button className="dropbtn">RESOURCES</button>
            <div className="dropdown-content">
              <a href="#">FTM</a>
              <a href="#">MTF</a>
              <a href="#">Questioning</a>
              <a href="#">Nonbinary</a>
              <a href="#">Parents</a>
            </div>
          </div>
        </div>
        <div className="three columns">
          <div className="dropdown">
            <button className="dropbtn">GALLERY</button>
            <div className="dropdown-content">
              <a href="#">Post</a>
              <a href="#">Search</a>
              <a href="#">View All</a>
            </div>
          </div>
        </div>
        <div className="three columns">

          <div className="dropdown">
            <button className="dropbtn">QUESTIONS</button>
            <div className="dropdown-content">
              <a href="#">Ask</a>
              <a href="#">Search</a>
              <a href="#">View All</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="three columns">

          <div className="dropdown">
            <button className="dropbtn">POSITIVITY</button>
            <div className="dropdown-content">
              <a href="#">Post</a>
              <a href="#">Search</a>
              <a href="/">View All</a>
            </div>
          </div>

        </div>
      </div>
    </div>


    
    <div className="article">

      <h3>
        Transpire
      </h3>
      <h5>About Us:</h5>
        <p className="parabox">
          Hi! My name is Hayden, I am an 18 year old transmasculine person who is currently studying web development. I've decided
          to make this website a place for people who are trans, nonbinary or questioning, to find helpful resources, positive
          messages, answers to questions, and positive pictures of the trans* community.
            <br/><br/> 
          I have done this because I see a great need in our community for resources that are easier to access,
          and prettier to look through. To me personally , it is really hard to read through information that looks like it
          was made decades ago, with no formatting or styling. I hope that this can be a place of positivity, learning and
          joy for everyone who visits this site.
            <br/><br/> 
          Please remember to be respectful to other users, and I hope you have a fabulous day!
            <br/><br/><br/> 
          Cheers,
          Hayden
       </p>
    </div>
    <div className="article2">
      <br/>
      <br/>
      <br/>
      
    </div>
    
    <div className="article">

      <h3>
        Picture
      </h3>
      <h5>Of The Day:</h5>
      <img className="articleimg" src="https://static1.squarespace.com/static/53246668e4b097bd81719d73/53aefdd1e4b034188ca5a7cc/5754b61ff85082f641d9b621/1465170754534/Flag_JackWave.jpg?format=1500w"></img>

    </div>

    <div className="article2">
      <br/>
      <br/>
      <br/>

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
      <br/>
      <br/>
      <br/>



    </div>

    
     
        <div className="row">
          <div className="eight columns">
            <h5 className="footertxt">
              Made by Hayden , 2018
            </h5>
          </div>

          <div className="four columns">
         
            <h5 className="footertxt"><a className="footertxt" href="https://github.com/hayden-malan">GitHub</a> | <a className="footertxt"  href="https://keep--cool.tumblr.com">Tumblr</a> |
              <a className="footertxt"      href="https://hayden-malan.github.io/projectShark/sharks.html">SharkQuiz</a>
            </h5>
          </div>
        </div>
    
   




   </div>
  )
}

export default Home