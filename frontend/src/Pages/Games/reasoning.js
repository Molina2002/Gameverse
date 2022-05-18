import React from 'react'
import Sidebar from '../Sidebar'
import { Box, HStack } from '@chakra-ui/react'
const quiz = () => {
    const divStyle={
// border: '1px solid black',
borderRadius: '10px',
height:'742px',
 overflow:' hidden',
position:'relative',
width: '700px',
marginLeft:'400px'

}
const ifm={
    height: '1400px',
    position:'absolute',
   top:"-600px",
   left:"-200px",
    width: '1450px',
}
  return (
      <div className="edu1" style={{width:'100vw', backgroundColor: 'hsl(233, 47%, 13%)'}}>
        <HStack  spacing='0px'>
        <Sidebar/>
        
         <div style={divStyle} >
 <iframe scrolling='no' src="https://www.edudose.com/reasoning/conditional-coding-questions-answers/" style={ifm} > 
</iframe>
 </div>

       </HStack> 
    </div>
  )
}

export default quiz

