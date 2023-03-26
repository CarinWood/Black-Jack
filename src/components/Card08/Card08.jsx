import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import './card08.css'

const Card08 = ({suit}) => {
   const renderFirstSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card08-first-symbol"/>
    } else if (suit === 'hearts') {
        return <GiHearts className="card08-first-symbol red"/>
    } else if (suit === 'clubs') {
        return <GiClubs className="card08-first-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="card08-first-symbol red"/>
    }
}

const renderSecondSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card08-second-symbol"/>
    } else if(suit === 'hearts') {
        return <GiHearts className="card08-second-symbol red"/>
    } else if (suit === 'clubs') {
        return <GiClubs className="card08-second-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="card08-second-symbol red"/>
    }
  }

  const renderMiddleSymbolsCard08 = (suit) => {
    if(suit === 'spades') {
        return <>
                 <GiSpades className="card08-middle-symbol-one"/>
                 <GiSpades className="card08-middle-symbol-two"/>
                 <GiSpades className="card08-middle-symbol-three"/>
                 <GiSpades className="card08-middle-symbol-four"/>
                 <GiSpades className="card08-middle-symbol-five"/>
                 <GiSpades className="card08-middle-symbol-six"/>
                 <GiSpades className="card08-middle-symbol-seven"/>
                 <GiSpades className="card08-middle-symbol-eight"/>
               </>
    } else if (suit === 'hearts') {
        return <>
                 <GiHearts className="card08-middle-symbol-one red hearts"/>
                 <GiHearts className="card08-middle-symbol-two red hearts"/>
                 <GiHearts className="card08-middle-symbol-three red hearts"/>
                 <GiHearts className="card08-middle-symbol-four red hearts"/>
                 <GiHearts className="card08-middle-symbol-five red hearts"/>
                 <GiHearts className="card08-middle-symbol-six red hearts"/>
                 <GiHearts className="card08-middle-symbol-seven red hearts"/>
                 <GiHearts className="card08-middle-symbol-eight red hearts"/>
               </>
    } else if (suit === 'clubs') {
      return <>
                <GiClubs className="card08-middle-symbol-one"/>
                <GiClubs className="card08-middle-symbol-two"/>
                <GiClubs className="card08-middle-symbol-three"/>
                <GiClubs className="card08-middle-symbol-four"/>
                <GiClubs className="card08-middle-symbol-five"/>
                <GiClubs className="card08-middle-symbol-six"/>
                <GiClubs className="card08-middle-symbol-seven"/>
                <GiClubs className="card08-middle-symbol-eight"/>
                
             </>
    } else if (suit === 'diamonds') {
      return <>
                  <GiDiamonds className="card08-middle-symbol-one red diamond"/>
                  <GiDiamonds className="card08-middle-symbol-two red diamond"/>
                  <GiDiamonds className="card08-middle-symbol-three red diamond"/>
                  <GiDiamonds className="card08-middle-symbol-four red diamond"/>
                  <GiDiamonds className="card08-middle-symbol-five red diamond"/>
                  <GiDiamonds className="card08-middle-symbol-six red diamond"/>
                  <GiDiamonds className="card08-middle-symbol-seven red diamond"/>
                  <GiDiamonds className="card08-middle-symbol-eight red diamond"/>
             </>
    }
  }

  return (
    <div className="card08-frame">
      <p className={(suit === 'spades' || suit === 'clubs') ? 'card08-first-digit' : 'card08-first-digit red'}>8</p>
      <p className={(suit === 'spades' || suit === 'clubs') ? 'card08-second-digit' : 'card08-second-digit red'}>8</p>
      
      {renderFirstSymbol(suit)}
      {renderSecondSymbol(suit)}

      {renderMiddleSymbolsCard08(suit)}
 </div>
  )
}

export default Card08