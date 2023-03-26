import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import './card10.css'

const Card10 = ({suit}) => {
  const renderFirstSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card10-first-symbol"/>
    } else if (suit === 'hearts') {
        return <GiHearts className="card10-first-symbol red"/>
    } else if (suit === 'clubs') {
      return <GiClubs className="card10-first-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="card10-first-symbol red"/>
    }
}

const renderSecondSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card10-second-symbol"/>
    } else if(suit === 'hearts') {
        return <GiHearts className="card10-second-symbol red"/>
    } else if (suit === 'diamonds') {
        return <GiDiamonds className="card10-second-symbol red"/>
    }
  }

  return (
    <div className="card10-frame">
      <p className={(suit === 'spades' || suit === 'clubs') ? 'card10-first-digit' : 'card10-first-digit red'}>10</p>
      <p className={(suit === 'spades' || suit === 'clubs') ? 'card10-second-digit' : 'card10-second-digit red'}>10</p>
     {renderFirstSymbol(suit)}
     {renderSecondSymbol(suit)}
 </div>
  )
}

export default Card10