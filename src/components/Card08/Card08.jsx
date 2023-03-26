import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import './card08.css'

const Card08 = ({suit}) => {
  const renderFirstSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="first-symbol"/>
    }
}
  return (
    <div className="card08-frame">
    <p className="card08-first-digit">8</p>
     <p className="card08-second-digit">8</p>
     {renderFirstSymbol(suit)}
 </div>
  )
}

export default Card08