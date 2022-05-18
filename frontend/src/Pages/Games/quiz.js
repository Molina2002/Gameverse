import React from 'react'
import Sidebar from '../Sidebar'
import { Box, HStack } from '@chakra-ui/react'
const quiz = () => {
    const divStyle={
border: '1px solid black',
height:'800px',
 overflow:' hidden',
position:'relative',
width: '1450px',


}
const ifm={
    height: '900px',
    position:'absolute',
   
    width: '1450px',
}
  return (
      <div className="edu1">
        <HStack  spacing='0px'>
        <Sidebar/>
        
         <div style={divStyle} >
 <iframe src="https://littlealchemy2.com/" style={ifm} > 
</iframe>
 </div>

       </HStack> 
    </div>
  )
}

export default quiz

