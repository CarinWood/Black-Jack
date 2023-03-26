import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import './card09.css'

const Card09 = ({suit}) => {
  const renderFirstSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card09-first-symbol"/>
    } else if (suit === 'hearts') {
        return <GiHearts className="card09-first-symbol red"/>
    } else if (suit === 'clubs') {
      return <GiClubs className="card09-first-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="card09-first-symbol red"/>
    }
}

const renderSecondSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card09-second-symbol"/>
    } else if(suit === 'hearts') {
        return <GiHearts className="card09-second-symbol red"/>
    } else if (suit === 'clubs') {
      return <GiClubs className="card09-second-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="card09-second-symbol red "/>
    }
  }


  return (
    <div className="card09-frame">
      <p className={(suit === 'spades' || suit === 'clubs') ? 'card09-first-digit' : 'card09-first-digit red'}>9</p>
      <p className={(suit === 'spades' || suit === 'clubs') ? 'card09-second-digit' : 'card09-second-digit red'}>9</p>
      
      {renderFirstSymbol(suit)}
      {renderSecondSymbol(suit)}
 </div>
  )
}

export default Card09