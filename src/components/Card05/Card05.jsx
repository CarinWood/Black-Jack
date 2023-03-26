import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import './card05.css'

const Card05 = ({suit}) => {

    const renderFirstSymbol = (suit) => {
        if(suit === 'spades') {
            return <GiSpades className="card05-first-symbol"/>
        } else if (suit === 'hearts') {
            return <GiHearts className="card05-first-symbol red"/>
        } else if (suit === 'clubs') {
            return <GiClubs className="card05-first-symbol"/>
        } else if (suit === 'diamonds') {
            return <GiDiamonds className="card05-first-symbol red"/>
        }
    }

    const renderSecondSymbol = (suit) => {
        if(suit === 'spades') {
            return <GiSpades className="card05-second-symbol"/>
        } else if(suit === 'hearts') {
            return <GiHearts className="card05-second-symbol red"/>
        } else if(suit === 'clubs') {
            return <GiClubs className="card05-second-symbol"/>
        } else if (suit === 'diamonds') {
            return <GiDiamonds className="card05-second-symbol red"/>
        }
      }

  return (
    <div className="card05-frame">
        <p className={(suit === 'spades' || suit === 'clubs') ? 'card05-first-digit' : 'card05-first-digit red'}>5</p>
        <p className={(suit === 'spades' || suit === 'clubs') ? 'card05-second-digit' : 'card05-second-digit red'}>5</p>
        {renderFirstSymbol(suit)}
        {renderSecondSymbol(suit)}
    </div>
  )
}

export default Card05