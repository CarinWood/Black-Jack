import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import './king.css'

const King = ({suit}) => {
  const renderFirstSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="king-first-symbol"/>
    } else if (suit === 'hearts') {
        return <GiHearts className="king-first-symbol red"/>
    } else if (suit === 'clubs') {
      return <GiClubs className="king-first-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="king-first-symbol red"/>
    }
}

const renderSecondSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="king-second-symbol"/>
    } else if(suit === 'hearts') {
        return <GiHearts className="king-second-symbol red"/>
    } else if (suit === 'clubs') {
      return <GiClubs className="king-second-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="king-second-symbol red"/>
    }
  }

  return (
    <div className="king-frame">
    <p className={(suit === 'spades' || suit === 'clubs') ? 'king-first-letter' : 'king-first-letter red'}>K</p>
    <p className={(suit === 'spades' || suit === 'clubs') ? 'king-second-letter' : 'king-second-letter red'}>K</p>
   
     {renderFirstSymbol(suit)}
     {renderSecondSymbol(suit)}
 </div>
  )
}

export default King