import React from 'react'
import './SubCard.css'
import Card from './Card';
import {Link} from "react-router-dom"
function SubCard() {
    // const navigate = useNavigate();
  return (
    <div className="outer__container">
      <section>
          <div className="container__1">
            <Link to="/tictac"> <Card heading="Tic-Tac-Toe" image='https://github.com/harsh021102/images-for-project/blob/main/tictactoe.jpg?raw=true'/></Link>
            <Link to="/wordle"><Card heading="Wordle" image="https://github.com/harsh021102/images-for-project/blob/main/wordle-game.png?raw=true"/></Link>
            <Link to="/memory"> <Card heading="Memory-Game" image="https://github.com/harsh021102/images-for-project/blob/main/memory.jpg?raw=true"/></Link>
          </div>
      </section>
    </div>
  )
}
export default SubCard