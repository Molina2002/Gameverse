import React from 'react'
import Sidebar from '../Sidebar'
import { Box, HStack } from '@chakra-ui/react'
const tictac = () => {
const divStyle={
  height:'787px',
  overflow:' hidden',
  position:'relative',
  width: '1700px',
}
const ifm={
    height: '787px',
    position:'absolute', 
    width: '1450px',
}
  return (
    <div className="edu1" style={{width:'100vw', backgroundColor: '#131a28'}}>
        <HStack  spacing='0px'>
        <Sidebar/>
        <div style={divStyle} >
 <iframe scrolling='no' src="https://harsh021102.github.io/tic-tac-toe/" style={ifm} > 
</iframe>
 </div>

       </HStack> 
    </div>
  )
}

export default tictac