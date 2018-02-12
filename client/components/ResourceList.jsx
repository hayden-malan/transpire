import React from 'react'

//imports resource components
import FTM from './FTM'
import BlankSpace from './BlankSpace'
import MTF from './MTF'
import Questioning from './Questioning'
import NonBinary from './NonBinary'
import Parents from './Parents'

const ResourceList = () => {
  return (
    <div className='resourcelist'>
      <div className="article">

        <h3>
          All Resources :
      </h3>
        
         <FTM />
         <BlankSpace />
         <MTF />
         <BlankSpace />
         <Questioning />
         <BlankSpace />
         <NonBinary />
         <BlankSpace />
         <Parents />
       
      </div>
    </div>
  )
}

export default ResourceList