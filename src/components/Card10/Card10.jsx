import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import './card10.css'

const Card10 = ({suit}) => {
  const renderFirstSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="first-symbol"/>
    }
}
  return (
    <div className="card10-frame">
    <p className="card10-first-digit">10</p>
     <p className="card10-second-digit">10</p>
     {renderFirstSymbol(suit)}
 </div>
  )
}

export default Card10