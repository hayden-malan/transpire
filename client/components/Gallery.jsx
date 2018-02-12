import React from 'react'

const Gallery = () => {
  return (
    <div className='gallery'>


      <div className="article">

        <h3>
          Transpire
      </h3>
        <h5>About Us:</h5>
        <p className="parabox">
          Hi! My name is Hayden, I am an 18 year old transmasculine person who is currently studying web development. I've decided
          to make this website a place for people who are trans, nonbinary or questioning, to find helpful resources, positive
          messages, answers to questions, and positive pictures of the trans* community.
            <br /><br />
          I have done this because I see a great need in our community for resources that are easier to access,
          and prettier to look through. To me personally , it is really hard to read through information that looks like it
          was made decades ago, with no formatting or styling. I hope that this can be a place of positivity, learning and
          joy for everyone who visits this site.
            <br /><br />
          Please remember to be respectful to other users, and I hope you have a fabulous day!
            <br /><br /><br />
          Cheers,
          Hayden
       </p>
      </div>
      <div className="article2">
        <br />
        <br />
        <br />

      </div>

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

    </div>
  )
}

export default Gallery