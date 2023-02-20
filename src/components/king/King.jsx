import React from 'react'
import './king.css'
import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import { FaChessKing } from "react-icons/fa";


const King = ({suit}) => {
  return (
    <div className='card-frame'>
      <p className={suit === 'hearts' || suit === 'diamonds' ? "king-k red": "king-k black"}>K</p>
         
            {suit === 'hearts' && <GiHearts className='hearts-suit-small' id="hearts-small"/>} 
            {suit === 'clubs' && <GiClubs className='clubs-suit-small' id="clubs-small"/>}
            {suit === 'diamonds' && <GiDiamonds className='diamonds-suit-small' id="diamonds-small"/>}
            {suit === 'spades' && <GiSpades className='spades-suit-small' id="spades-small"/>}

            {suit === 'hearts' && <FaChessKing className='first-crown red'/>}
            {suit === 'diamonds' && <FaChessKing className='first-crown red'/>}
            {suit === 'clubs' && <FaChessKing className='first-crown black'/>}
            {suit === 'spades' && <FaChessKing className='first-crown black'/>}
            
            {suit === 'hearts' && <FaChessKing className='second-crown red'/>}
            {suit === 'diamonds' && <FaChessKing className='second-crown red'/>}
            {suit === 'clubs' && <FaChessKing className='second-crown black'/>}
            {suit === 'spades' && <FaChessKing className='second-crown black'/>}

            {suit === 'hearts' && <GiHearts className='heart-suit-small-2' id="heart-2"/>} 
            {suit === 'clubs' && <GiClubs className='clubs-suit-small-2' id="king-clubs-2"/>}
            {suit === 'diamonds' && <GiDiamonds className='diamonds-suit-small-2' id="diamonds-2"/>}
            {suit === 'spades' && <GiSpades className='spades-suit-small-2' id="spades-2"/>}
         
            <p className={suit === 'hearts' || suit === 'diamonds' ? "second-k red": "second-k black"}>K</p>
    </div>
   
  )
}

export default King