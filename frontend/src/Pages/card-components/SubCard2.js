import React from 'react'
import './SubCard.css'
import Card from './Card'
import {Link} from "react-router-dom"
import alchemy from '../images/alchemy.jpg'
function SubCard2() {
  return (
    <div className="outer__container">
      <section>
          <div className="container__1">
             <Link to ="/quiz"> <Card heading="Little Alchemy" image={alchemy}/></Link>
             <Link to ="/reasoning"> <Card heading="Reasoning quiz" image="https://github.com/harsh021102/images-for-project/blob/main/quiz-image.jpg?raw=true"/></Link>
             <Link to ="/derby"><Card heading="Division Derby" image="https://github.com/harsh021102/images-for-project/blob/main/derby.jpg?raw=true"/></Link> 
          </div>
      </section>
    </div>
  )
}

export default SubCard2