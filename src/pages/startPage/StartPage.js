import React from 'react'
import './startPage.css'
import King from '../../components/king/King'
import { useNavigate } from 'react-router-dom'
import Ace from '../../components/ace/Ace'
import Back from '../../components/back/Back'



const StartPage = () => {

  const navigate = useNavigate();

  const startGame = () => {
    navigate("/play");
  }
 
  const toFAQ = () => {
    navigate("/faq");
  }

  const toCredits = () => {
    navigate("/credits");
  }




  return (
    <div className='startpage'>
      <h1 className='bj-heading'>Black Jack</h1>
      <div className="start-page-king">
      <King suit={"diamonds"} />
      </div>
      <div className='start-page-ace'>
        <Ace suit={"clubs"} />
      </div>

    
      <div className='button-area'>
          <button onClick={() => startGame()} className='play-btn'>Play</button>
          <button className='rules-btn' onClick={() => toFAQ()}>FAQ</button>
          <button className='credits-btn' onClick={() => toCredits()}>Credits</button>
      </div>

    </div>
  )
}

export default StartPage