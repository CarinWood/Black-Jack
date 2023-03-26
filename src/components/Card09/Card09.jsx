import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import './card09.css'

const Card09 = ({suit}) => {
  const renderFirstSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="first-symbol"/>
    }
}
  return (
    <div className="card09-frame">
    <p className="card09-first-digit">9</p>
     <p className="card09-second-digit">9</p>
     {renderFirstSymbol(suit)}
 </div>
  )
}

export default Card09