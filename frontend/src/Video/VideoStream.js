import React from 'react'
import {HStack} from "@chakra-ui/react";
import Cpage from './Cpage';
const VideoStream = () => {
         const divStyle={
border: '1px solid black',
height:'787px',
 overflow:' hidden',
position:'relative',
width: '530px',


}
const ifm={
    height: '787px',
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
    height: '787px',
    position:'absolute',
   
    width: '1270px',
}
  return (
<div style={{width:'100vw', backgroundColor: 'hsl(233, 47%, 13%)'}}>
<HStack spacing="0px">
      <div style={divStyle}>
      <iframe src="/vchat" style={ifm}></iframe>
    </div>
    <div style={div2Style}>
        <iframe src="https://harsh021102.github.io/project-youtube/" scrolling="no" style={ifm2}></iframe>
    </div>
    </HStack>
    </div>
  )  
}

export default VideoStream