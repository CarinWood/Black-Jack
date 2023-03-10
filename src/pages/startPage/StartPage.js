import React from 'react'
import './startPage.css'
import King from '../../components/king/King'

const StartPage = () => {
  return (
    <div className='startpage'>
      <h1 className='bj-heading'>Black Jack</h1>
      <div className='firstpage-kingcard'>
        <King suit={"hearts"}/>
      </div>
      <div className='button-area'>
          <button className='play-btn'>Play</button>
          <button className='rules-btn'>Rules</button>
          <button className='credits-btn'>Credits</button>
      </div>

    </div>
  )
}

export default StartPage