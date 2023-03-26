import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import './card06.css'

const Card06 = ({suit}) => {

  const renderFirstSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="first-symbol"/>
    }
  }

  return (
    <div className="card06-frame">
    <p className="card06-first-digit">6</p>
     <p className="card06-second-digit">6</p>
     {renderFirstSymbol(suit)}
 </div>
  )
}

export default Card06