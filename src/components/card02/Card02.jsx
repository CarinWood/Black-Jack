import React from 'react'
import './card.css'
import { BsFillSuitHeartFill } from "react-icons/bs";
import { GiClubs, GiDiamonds, GiSpades } from "react-icons/gi";

const Card02 = ({ suit }) => {

 

  return (
    <div className='card-frame'>
      <p className={suit === 'hearts' || suit === 'diamonds' ? "first-digit red": "first-digit black"}>2</p>
         
            {suit === 'hearts' && <BsFillSuitHeartFill className='heart-suit-small'/>} 
            {suit === 'clubs' && <GiClubs className='clubs-suit-small'/>}
            {suit === 'diamonds' && <GiDiamonds className='diamonds-suit-small'/>}
            {suit === 'spades' && <GiSpades className='spades-suit-small'/>}

            {suit === 'hearts' && <BsFillSuitHeartFill className='first-heart'/>}
            {suit === 'diamonds' && <GiDiamonds className='first-diamond'/>}
            {suit === 'clubs' && <GiClubs className='first-club'/>}
            {suit === 'spades' && <GiSpades className='first-spade'/>}
            
            {suit === 'hearts' && <BsFillSuitHeartFill className='second-heart'/>}
            {suit === 'diamonds' && <GiDiamonds className='second-diamond'/>}
            {suit === 'clubs' && <GiClubs className='second-club'/>}
            {suit === 'spades' && <GiSpades className='second-spade'/>}

            {suit === 'hearts' && <BsFillSuitHeartFill className='heart-suit-small-2'/>} 
            {suit === 'clubs' && <GiClubs className='clubs-suit-small-2'/>}
            {suit === 'diamonds' && <GiDiamonds className='diamonds-suit-small-2'/>}
            {suit === 'spades' && <GiSpades className='spades-suit-small-2'/>}
         
            <p className={suit === 'hearts' || suit === 'diamonds' ? "second-digit red": "second-digit black"}>2</p>
    </div>
  )
}

export default Card02