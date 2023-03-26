import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import './card06.css'

const Card06 = ({suit}) => {

  const renderFirstSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card06-first-symbol"/>
    } else if (suit === 'hearts') {
        return <GiHearts className="card06-first-symbol red"/>
    } else if (suit === 'clubs') {
        return <GiClubs className="card06-first-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="card06-first-symbol red"/>
    }
}

const renderSecondSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card06-second-symbol"/>
    } else if(suit === 'hearts') {
        return <GiHearts className="card06-second-symbol red"/>
    } else if(suit === 'clubs') {
        return <GiClubs className="card06-second-symbol "/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="card06-second-symbol red"/>
    }
  }

  const renderMiddleSymbolsCard06 = (suit) => {
    if(suit === 'spades') {
        return <>
                 <GiSpades className="card06-middle-symbol-one"/>
                 <GiSpades className="card06-middle-symbol-two"/>
                 <GiSpades className="card06-middle-symbol-three"/>
                 <GiSpades className="card06-middle-symbol-four"/>
                 <GiSpades className="card06-middle-symbol-five"/>
                 <GiSpades className="card06-middle-symbol-six"/>
               </>
    } else if (suit === 'hearts') {
        return <>
                 <GiHearts className="card06-middle-symbol-one red hearts"/>
                 <GiHearts className="card06-middle-symbol-two red hearts"/>
                 <GiHearts className="card06-middle-symbol-three red hearts"/>
                 <GiHearts className="card06-middle-symbol-four red hearts"/>
                 <GiHearts className="card06-middle-symbol-five red hearts"/>
                 <GiHearts className="card06-middle-symbol-six red hearts"/>
               </>
    } else if (suit === 'clubs') {
      return <>
                <GiClubs className="card06-middle-symbol-one"/>
                <GiClubs className="card06-middle-symbol-two"/>
                <GiClubs className="card06-middle-symbol-three"/>
                <GiClubs className="card06-middle-symbol-four"/>
                <GiClubs className="card06-middle-symbol-five"/>
                <GiClubs className="card06-middle-symbol-six"/>
                
             </>
    } else if (suit === 'diamonds') {
      return <>
                  <GiDiamonds className="card06-middle-symbol-one red diamond"/>
                  <GiDiamonds className="card06-middle-symbol-two red diamond"/>
                  <GiDiamonds className="card06-middle-symbol-three red diamond"/>
                  <GiDiamonds className="card06-middle-symbol-four red diamond"/>
                  <GiDiamonds className="card06-middle-symbol-five red diamond"/>
                  <GiDiamonds className="card06-middle-symbol-six red diamond"/>
             </>
    }
  }

  return (
    <div className="card06-frame">
      <p className={(suit === 'spades' || suit === 'clubs') ? 'card06-first-digit' : 'card06-first-digit red'}>6</p>
      <p className={(suit === 'spades' || suit === 'clubs') ? 'card06-second-digit' : 'card06-second-digit red'}>6</p>
      
      {renderFirstSymbol(suit)}
      {renderSecondSymbol(suit)}

      {renderMiddleSymbolsCard06(suit)}
 </div>
  )
}

export default Card06