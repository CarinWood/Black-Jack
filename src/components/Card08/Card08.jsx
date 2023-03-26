import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import './card08.css'

const Card08 = ({suit}) => {
   const renderFirstSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card08-first-symbol"/>
    } else if (suit === 'hearts') {
        return <GiHearts className="card08-first-symbol red"/>
    } else if (suit === 'clubs') {
        return <GiClubs className="card08-first-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="card08-first-symbol red"/>
    }
}

const renderSecondSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card08-second-symbol"/>
    } else if(suit === 'hearts') {
        return <GiHearts className="card08-second-symbol red"/>
    } else if (suit === 'clubs') {
        return <GiClubs className="card08-second-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="card08-second-symbol red"/>
    }
  }

  return (
    <div className="card08-frame">
      <p className={(suit === 'spades' || suit === 'clubs') ? 'card08-first-digit' : 'card08-first-digit red'}>8</p>
      <p className={(suit === 'spades' || suit === 'clubs') ? 'card08-second-digit' : 'card08-second-digit red'}>8</p>
      
      {renderFirstSymbol(suit)}
      {renderSecondSymbol(suit)}
 </div>
  )
}

export default Card08