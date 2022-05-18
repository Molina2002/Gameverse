import React from 'react'
import Sidebar from '../Sidebar'
import { HStack } from '@chakra-ui/react'
const quiz = () => {
const divStyle={
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
      <div className="edu1" style={{width:'100vw', backgroundColor: 'hsl(233, 47%, 13%)'}}>
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

