import React from 'react'
import {HStack} from "@chakra-ui/react";
const derby = () => {
const divStyle={
  height:'787px',
  overflow:' hidden',
  position:'relative',
  width: '450px',
}
const ifm={
  height: '770px',
  position:'absolute',
  width: '1450px',
}
const div2Style={
border: 'solid black',
height:'787px',
overflow:' hidden',
position:'relative',
width: '1400px',
}
const ifm2={
    height: '1600px',
    position:'absolute',
   top:"-630px",
    width: '1200px',
}
  return (
    <>
<HStack spacing="0px" style={{width:'100vw', backgroundColor: 'hsl(233, 47%, 13%)'}}>
      <div style={divStyle}>
      <iframe src="/vchat" style={ifm}></iframe>
    </div>
    <div style={div2Style}>
        <iframe src="https://www.mathplayground.com/ASB_Division_Derby.html" scrolling="no" style={ifm2}></iframe>
    </div>
    </HStack>
    </>
  )
}

export default derby