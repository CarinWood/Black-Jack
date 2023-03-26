import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import './card07.css'

const Card07 = ({suit}) => {

  const renderFirstSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card07-first-symbol"/>
    } else if (suit === 'hearts') {
        return <GiHearts className="card07-first-symbol red"/>
    } else if (suit === 'clubs') {
        return <GiClubs className="card07-first-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="card07-first-symbol red"/>
    }
}

const renderSecondSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card07-second-symbol"/>
    } else if(suit === 'hearts') {
        return <GiHearts className="card07-second-symbol red"/>
    } else if (suit === 'clubs') {
      return <GiClubs className="card07-second-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="card07-second-symbol red"/>
    }
  }

  const renderMiddleSymbolsCard07 = (suit) => {
    if(suit === 'spades') {
        return <>
                 <GiSpades className="card07-middle-symbol-one"/>
                 <GiSpades className="card07-middle-symbol-two"/>
                 <GiSpades className="card07-middle-symbol-three"/>
                 <GiSpades className="card07-middle-symbol-four"/>
                 <GiSpades className="card07-middle-symbol-five"/>
                 <GiSpades className="card07-middle-symbol-six"/>
                 <GiSpades className="card07-middle-symbol-seven"/>
               </>
    } else if (suit === 'hearts') {
        return <>
                 <GiHearts className="card07-middle-symbol-one red hearts"/>
                 <GiHearts className="card07-middle-symbol-two red hearts"/>
                 <GiHearts className="card07-middle-symbol-three red hearts"/>
                 <GiHearts className="card07-middle-symbol-four red hearts"/>
                 <GiHearts className="card07-middle-symbol-five red hearts"/>
                 <GiHearts className="card07-middle-symbol-six red hearts"/>
                 <GiHearts className="card07-middle-symbol-seven red hearts"/>
               </>
    } else if (suit === 'clubs') {
      return <>
                <GiClubs className="card07-middle-symbol-one"/>
                <GiClubs className="card07-middle-symbol-two"/>
                <GiClubs className="card07-middle-symbol-three"/>
                <GiClubs className="card07-middle-symbol-four"/>
                <GiClubs className="card07-middle-symbol-five"/>
                <GiClubs className="card07-middle-symbol-six"/>
                <GiClubs className="card07-middle-symbol-seven"/>
                
             </>
    } else if (suit === 'diamonds') {
      return <>
                  <GiDiamonds className="card07-middle-symbol-one red"/>
                  <GiDiamonds className="card07-middle-symbol-two red"/>
                  <GiDiamonds className="card07-middle-symbol-three red"/>
                  <GiDiamonds className="card07-middle-symbol-four red"/>
                  <GiDiamonds className="card07-middle-symbol-five red"/>
                  <GiDiamonds className="card07-middle-symbol-six red"/>
                  <GiDiamonds className="card07-middle-symbol-seven red"/>
             </>
    }
  }

  return (
    <div className="card07-frame">
      <p className={(suit === 'spades' || suit === 'clubs') ? 'card07-first-digit' : 'card07-first-digit red'}>7</p>
      <p className={(suit === 'spades' || suit === 'clubs') ? 'card07-second-digit' : 'card07-second-digit red'}>7</p>
      
      {renderFirstSymbol(suit)}
      {renderSecondSymbol(suit)}

      {renderMiddleSymbolsCard07(suit)}
 </div>
  )
}

export default Card07