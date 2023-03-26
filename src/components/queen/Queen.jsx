import { GiClubs, GiDiamonds, GiSpades, GiHearts, GiChessQueen } from "react-icons/gi";
import './queen.css'

const Queen = ({suit}) => {
  const renderFirstSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="queen-first-symbol"/>
    } else if (suit === 'hearts') {
        return <GiHearts className="queen-first-symbol red"/>
    } else if (suit === 'clubs') {
      return <GiClubs className="queen-first-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="queen-first-symbol red"/>
    }
}

const renderSecondSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="queen-second-symbol"/>
    } else if(suit === 'hearts') {
        return <GiHearts className="queen-second-symbol red"/>
    } else if(suit === 'clubs') {
      return <GiClubs className="queen-second-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="queen-second-symbol red"/>
    }
  }
  return (
    <div className="queen-frame">
      <p className={(suit === 'spades' || suit === 'clubs') ? 'queen-first-letter' : 'queen-first-letter red'}>Q</p>
      <p className={(suit === 'spades' || suit === 'clubs') ? 'queen-second-letter' : 'queen-second-letter red'}>Q</p>
     {renderFirstSymbol(suit)}
     {renderSecondSymbol(suit)}

     <GiChessQueen className={(suit === 'spades' || suit === 'clubs') ? 'top-queen black' : 'top-queen red'} />
     <GiChessQueen className={(suit === 'spades' || suit === 'clubs') ? 'bottom-queen black' : 'bottom-queen red'} />

 </div>
  )
}

export default Queen