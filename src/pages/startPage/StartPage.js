import React from 'react'
import './startPage.css'
import King from '../../components/king/King'
import { useNavigate } from 'react-router-dom'
import Ace from '../../components/ace/Ace'
import Back from '../../components/back/Back'
import { useEffect, useState } from 'react'


const StartPage = () => {
  const [rotateCard, setRotateCard] = useState(false);

  const navigate = useNavigate();

  const startGame = () => {
    navigate("/play");
  }


  useEffect(() => {
      setRotateCard(true)
  }, 500);

  return (
    <div className='startpage'>
      <h1 className='bj-heading'>Black Jack</h1>
      <King suit={"diamonds"}/>

      <div className='card-container'>
          <div className={rotateCard ? 'card flip': 'card'}>
            
          <div className='back-card-frame'>
                    <div className='inner-frame'>
                    </div>
                </div>

                <div className='front'>
                      <Ace suit={"clubs"}/>
                </div>

                
          </div>
      </div>
    
      <div className='button-area'>
          <button onClick={() => startGame()} className='play-btn'>Play</button>
          <button className='rules-btn'>Rules</button>
          <button className='credits-btn'>Credits</button>
      </div>

    </div>
  )
}

export default StartPage