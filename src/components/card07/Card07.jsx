import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import './card07.css'

const Card07 = ({suit}) => {

  const renderFirstSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card07-first-symbol"/>
    } else if (suit === 'hearts') {
        return <GiHearts className="card07-first-symbol red"/>
    } else if (suit === 'clubs') {
        return <GiClubs className="card07-first-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="card07-first-symbol red"/>
    }
}

const renderSecondSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card07-second-symbol"/>
    } else if(suit === 'hearts') {
        return <GiHearts className="card07-second-symbol red"/>
    } else if (suit === 'clubs') {
      return <GiClubs className="card07-second-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="card07-second-symbol red"/>
    }
  }

  return (
    <div className="card07-frame">
      <p className={(suit === 'spades' || suit === 'clubs') ? 'card07-first-digit' : 'card07-first-digit red'}>7</p>
      <p className={(suit === 'spades' || suit === 'clubs') ? 'card07-second-digit' : 'card07-second-digit red'}>7</p>
      
      {renderFirstSymbol(suit)}
      {renderSecondSymbol(suit)}
 </div>
  )
}

export default Card07