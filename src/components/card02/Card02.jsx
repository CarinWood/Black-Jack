import React from 'react'
import './card.css'
import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";

const Card02 = ({ suit }) => {

 

  return (
    <div className='card-frame'>
      <p className={suit === 'hearts' || suit === 'diamonds' ? "first-digit red": "first-digit black"}>2</p>
         
            {suit === 'hearts' && <GiHearts className='hearts-suit-small' id="hearts-small"/>} 
            {suit === 'clubs' && <GiClubs className='clubs-suit-small' id="clubs-small"/>}
            {suit === 'diamonds' && <GiDiamonds className='diamonds-suit-small' id="diamonds-small"/>}
            {suit === 'spades' && <GiSpades className='spades-suit-small' id="spades-small"/>}

            {suit === 'hearts' && <GiHearts className='first-heart'/>}
            {suit === 'diamonds' && <GiDiamonds className='first-diamond'/>}
            {suit === 'clubs' && <GiClubs className='first-club'/>}
            {suit === 'spades' && <GiSpades className='first-spade'/>}
            
            {suit === 'hearts' && <GiHearts id='second-heart-02'/>}
            {suit === 'diamonds' && <GiDiamonds id='second-diamond-02'/>}
            {suit === 'clubs' && <GiClubs id='second-club-02'/>}
            {suit === 'spades' && <GiSpades id='second-spade-02'/>}

            {suit === 'hearts' && <GiHearts className='heart-suit-small-2' id="heart-2"/>} 
            {suit === 'clubs' && <GiClubs className='clubs-suit-small-2' id="clubs-2"/>}
            {suit === 'diamonds' && <GiDiamonds className='diamonds-suit-small-2' id="diamonds-2"/>}
            {suit === 'spades' && <GiSpades className='spades-suit-small-2' id="spades-2"/>}
         
            <p className={suit === 'hearts' || suit === 'diamonds' ? "second-digit red": "second-digit black"}>2</p>
    </div>
  )
}

export default Card02