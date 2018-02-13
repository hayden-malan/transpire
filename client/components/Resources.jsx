import React from 'react'

//components
import PreAmble from './PreAmble'
import ResourceList from './ResourceList'
import BlankSpace from './BlankSpace'



const Resources = () => {
  return (
    <div className='resources'>

      <PreAmble />
        <BlankSpace/>
        <ResourceList/>
        <BlankSpace/>
      
    </div>
  )
}

export default Resources