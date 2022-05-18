import React from 'react'
import Sidebar from '../Sidebar'
import { Box, HStack } from '@chakra-ui/react'
const memory = () => {
    const divStyle={
border: '1px solid black',
height:'795px',
 overflow:' hidden',
position:'relative',
width: '1600px',


}
const ifm={
    height: '796px',
    position:'absolute',
   
    width: '1600px',
}
  return (
     <div className="edu1">
        <HStack  spacing='0px'>
        <Sidebar/>
        
         <div style={divStyle} >
 <iframe scrolling='no' src="https://harsh021102.github.io/memorygame/" style={ifm} > 
</iframe>
 </div>

       </HStack> 
    </div>
  )
}

export default memory