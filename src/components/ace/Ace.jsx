import React from 'react'
import './ace.css'
import { GiClubs, GiDiamonds, GiSpades, GiHearts, GiChessQueen } from "react-icons/gi";

const Ace = ({suit}) => {
  return (
    <div className='card-frame'>
    <p className={suit === 'hearts' || suit === 'diamonds' ? "first-Q red": "first-Q black"}>A</p>
       
          {suit === 'hearts' && <GiHearts className='heart-suit-small' id="queen-heart-1"/>} 
          {suit === 'clubs' && <GiClubs className='clubs-suit-small' id="queen-club-1"/>}
          {suit === 'diamonds' && <GiDiamonds className='diamonds-suit-small' id="queen-diamond-1"/>}
          {suit === 'spades' && <GiSpades className='spades-suit-small' id="spades-queen-small"/>}

          <GiClubs className='ace-club'/>

          {suit === 'hearts' && <GiHearts className='heart-suit-small-2' id="queen-heart-small-2"/>} 
          {suit === 'clubs' && <GiClubs className='clubs-suit-small-2' id="queen-club-small-2"/>}
          {suit === 'diamonds' && <GiDiamonds className='diamonds-suit-small-2' id="queen-diamond-small-2"/>}
          {suit === 'spades' && <GiSpades className='spades-suit-small-2'/>}
       
          <p className={suit === 'hearts' || suit === 'diamonds' ? "second-digit red": "second-digit black"}>A</p>
  </div>
  )
}

export default Ace