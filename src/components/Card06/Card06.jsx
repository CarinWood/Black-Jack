import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import './card06.css'

const Card06 = ({suit}) => {

  const renderFirstSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card06-first-symbol"/>
    } else if (suit === 'hearts') {
        return <GiHearts className="card06-first-symbol red"/>
    } else if (suit === 'clubs') {
        return <GiClubs className="card06-first-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="card06-first-symbol red"/>
    }
}

const renderSecondSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card06-second-symbol"/>
    } else if(suit === 'hearts') {
        return <GiHearts className="card06-second-symbol red"/>
    } else if(suit === 'clubs') {
        return <GiClubs className="card06-second-symbol "/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="card06-second-symbol red"/>
    }
  }

  return (
    <div className="card06-frame">
      <p className={(suit === 'spades' || suit === 'clubs') ? 'card06-first-digit' : 'card06-first-digit red'}>6</p>
      <p className={(suit === 'spades' || suit === 'clubs') ? 'card06-second-digit' : 'card06-second-digit red'}>6</p>
      
      {renderFirstSymbol(suit)}
      {renderSecondSymbol(suit)}
 </div>
  )
}

export default Card06