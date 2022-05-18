import React from 'react'
import {HStack} from "@chakra-ui/react";
const chess = () => {
       const divStyle={
border: '1px solid black',
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
   top:"-120px",
    width: '1200px',
}
  return (
    <>
<HStack spacing="0px">
      <div style={divStyle}>
      <iframe src="/vchat" style={ifm}></iframe>
    </div>
    <div style={div2Style}>
        <iframe src="https://www.chessmultiplayer.com/" scrolling="no" style={ifm2}></iframe>
    </div>
    </HStack>
    </>
  )
}

export default chess