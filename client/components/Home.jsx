import React from 'react'

//subcomponents
import About from './About'
import BlankSpace from './BlankSpace'
import PictureOTM from './PictureOTM'
import QuoteOTM from './QuoteOTM'



const Home = () => {
  return (
    <div className='home'>
      <About />
        <BlankSpace />

      <PictureOTM />
        <BlankSpace />

      <QuoteOTM />
        <BlankSpace />
        
    </div>
  )
}

export default Home