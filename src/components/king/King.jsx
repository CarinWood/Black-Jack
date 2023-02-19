import React from 'react'
import './king.css'
import { BsFillSuitHeartFill } from "react-icons/bs";
import { GiClubs, GiDiamonds, GiSpades } from "react-icons/gi";
import { FaChessKing } from "react-icons/fa";


const King = ({suit}) => {
  return (
    <div className='card-frame'>
    <p className={suit === 'hearts' || suit === 'diamonds' ? "first-digit red": "first-digit black"}>K</p>
       
          {suit === 'hearts' && <BsFillSuitHeartFill className='heart-suit-small'/>} 
          {suit === 'clubs' && <GiClubs className='clubs-suit-small'/>}
          {suit === 'diamonds' && <GiDiamonds className='diamonds-suit-small'/>}
          {suit === 'spades' && <GiSpades className='spades-suit-small'/>}

          {suit === 'hearts' && <BsFillSuitHeartFill className='first-heart'/>}
          {suit === 'diamonds' && <GiDiamonds className='first-diamond'/>}
          {suit === 'clubs' && <GiClubs className='first-club'/>}
          {suit === 'spades' && <FaChessKing className='first-spade'/>}
            
          {suit === 'hearts' && <BsFillSuitHeartFill className='second-heart'/>}
          {suit === 'diamonds' && <GiDiamonds className='second-diamond'/>}
          {suit === 'clubs' && <GiClubs className='second-club'/>}
          {suit === 'spades' && <FaChessKing className='second-spade'/>}

          {suit === 'hearts' && <BsFillSuitHeartFill className='heart-suit-small-2'/>} 
          {suit === 'clubs' && <GiClubs className='clubs-suit-small-2'/>}
          {suit === 'diamonds' && <GiDiamonds className='diamonds-suit-small-2'/>}
          {suit === 'spades' && <GiSpades className='spades-suit-small-2'/>}
       
          <p className={suit === 'hearts' || suit === 'diamonds' ? "second-digit red": "second-digit black"}>K</p>
  </div>
  )
}

export default King