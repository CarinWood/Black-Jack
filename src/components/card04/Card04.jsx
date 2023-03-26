import './card04.css'
import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";

const Card04 = ({suit}) => {
  return (
    <div className='card04-container'>
           <p className={suit === 'hearts' || suit === 'diamonds' ? "digit-4 red": "digit-4 black"}>4</p>

            {suit === 'hearts' && <GiHearts className='hearts-suit-small' id="hearts-small-04"/>} 
            {suit === 'clubs' && <GiClubs className='clubs-suit-small' id="clubs-small-04"/>}
            {suit === 'diamonds' && <GiDiamonds className='diamonds-suit-small' id="diamonds-small-04"/>}
            {suit === 'spades' && <GiSpades className='spades-suit-small' id="spades-small-04"/>}

            {suit === 'hearts' && <GiHearts className='first-heart-03'/>}
            {suit === 'diamonds' && <GiDiamonds className='first-diamond'/>}
            {suit === 'clubs' && <GiClubs className='first-club'/>}
            {suit === 'spades' && <GiSpades className='first-spade'/>}
        
            {suit === 'hearts' && <GiHearts className='middle-heart'/>}
            {suit === 'diamonds' && <GiDiamonds className='second-diamond'/>}
            {suit === 'clubs' && <GiClubs className='middle-club'/>}
            {suit === 'spades' && <GiSpades className='middle-spade'/>}
            
            {suit === 'hearts' && <GiHearts className='third-heart'/>}
            {suit === 'diamonds' && <GiDiamonds className='third-diamond'/>}
            {suit === 'clubs' && <GiClubs id='second-club-02'/>}
            {suit === 'spades' && <GiSpades id='second-spade-02'/>}

            {suit === 'diamonds' && <GiDiamonds className='fourth-diamond'/>}

            {suit === 'hearts' && <GiHearts className='heart-suit-small-2' id="heart-2"/>} 
            {suit === 'clubs' && <GiClubs className='clubs-suit-small-2' id="clubs-2"/>}
            {suit === 'diamonds' && <GiDiamonds className='diamonds-suit-small-2' id="diamonds-small-2-04"/>}
            {suit === 'spades' && <GiSpades className='spades-suit-small-2' id="spades-2"/>}
         
            <p className={suit === 'hearts' || suit === 'diamonds' ? "second-digit red": "second-digit black"}>4</p>
    </div>
  )
}

export default Card04