import React from 'react'

import Sidebar from '../Sidebar'
import { Box, HStack } from '@chakra-ui/react'
const wordle = () => {
         const divStyle={
border: '1px solid black',
height:'792px',
 overflow:' hidden',
position:'relative',
width: '1500px',


}
const ifm={
    height: '792px',
    position:'absolute',
   
    width: '1500px',
}
  return (
   <div className="edu1">
        <HStack  spacing='0px'>
        <Sidebar/>
        
         <div style={divStyle} >
 <iframe scrolling='no' src="https://molina2002.github.io/wordle/" style={ifm} > 
</iframe>
 </div>

       </HStack> 
    </div>
  
  )
}

export default wordle