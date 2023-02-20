import React from 'react'
import './queen.css'
import { BsFillSuitHeartFill } from "react-icons/bs";
import { GiClubs, GiDiamonds, GiSpades, GiChessQueen } from "react-icons/gi";
import { FaChessQueen } from "react-icons/fa";


const Queen = ({suit}) => {
  return (
    <div className='card-frame'>
    <p className={suit === 'hearts' || suit === 'diamonds' ? "first-digit red": "first-digit black"}>Q</p>
       
          {suit === 'hearts' && <BsFillSuitHeartFill className='heart-suit-small'/>} 
          {suit === 'clubs' && <GiClubs className='clubs-suit-small'/>}
          {suit === 'diamonds' && <GiDiamonds className='diamonds-suit-small'/>}
          {suit === 'spades' && <GiSpades className='spades-suit-small'/>}

          {suit === 'hearts' && <GiChessQueen className='first-queen-heart'/>}
          {suit === 'diamonds' && <GiChessQueen className='first-queen-diamond'/>}
          {suit === 'clubs' && <GiChessQueen className='first-queen-club'/>}
          {suit === 'spades' && <GiChessQueen className='first-queen-spade'/>}
            
          {suit === 'hearts' && <GiChessQueen className='second-queen-heart'/>}
          {suit === 'diamonds' && <GiChessQueen className='second-queen-diamond'/>}
          {suit === 'clubs' && <GiChessQueen className='second-queen-club'/>}
          {suit === 'spades' && <GiChessQueen className='second-queen-spade'/>}

          {suit === 'hearts' && <BsFillSuitHeartFill className='heart-suit-small-2'/>} 
          {suit === 'clubs' && <GiClubs className='clubs-suit-small-2'/>}
          {suit === 'diamonds' && <GiDiamonds className='diamonds-suit-small-2'/>}
          {suit === 'spades' && <GiSpades className='spades-suit-small-2'/>}
       
          <p className={suit === 'hearts' || suit === 'diamonds' ? "second-digit red": "second-digit black"}>Q</p>
  </div>
  )
}

export default Queen;