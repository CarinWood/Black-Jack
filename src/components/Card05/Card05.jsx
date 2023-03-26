import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import './card05.css'

const Card05 = ({suit}) => {

    const renderFirstSymbol = (suit) => {
        if(suit === 'spades') {
            return <GiSpades className="first-symbol"/>
        }
    }


  return (
    <div className="card05-frame">
       <p className="card05-first-digit">5</p>
        <p className="card05-second-digit">5</p>
        {renderFirstSymbol(suit)}
    </div>
  )
}

export default Card05