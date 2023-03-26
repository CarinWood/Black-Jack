import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import './card07.css'

const Card07 = ({suit}) => {

    const renderFirstSymbol = (suit) => {
        if(suit === 'spades') {
            return <GiSpades className="first-symbol"/>
        }
    }

  return (
    <div className="card07-frame">
    <p className="card07-first-digit">7</p>
     <p className="card07-second-digit">7</p>
     {renderFirstSymbol(suit)}
 </div>
  )
}

export default Card07