import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import './card03.css'

const Card03 = ({suit}) => {

  const renderFirstSymbol = (suit) => {
    if(suit === 'spades') {
      return <GiSpades className="card03-first-symbol"/>
    } else if (suit === 'hearts') {
        return <GiHearts className="card03-first-symbol red"/>
    } else if (suit === 'clubs') {
        return <GiClubs className="card03-first-symbol "/>
    } else if (suit === 'diamonds') {
        return <GiDiamonds className="card03-first-symbol red"/>
    }
  }

  const renderSecondSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card03-second-symbol"/>
    } else if(suit === 'hearts') {
        return <GiHearts className="card03-second-symbol red"/>
    } else if(suit === 'clubs') {
        return <GiClubs className="card03-second-symbol "/>
    } else if (suit === 'diamonds') {
        return <GiDiamonds className="card03-second-symbol red"/>
    }
  }

  const renderMiddleSymbolsCard03 = (suit) => {
    if(suit === 'spades') {
        return <>
                 <GiSpades className="card03-middle-symbol-one"/>
                 <GiSpades className="card03-middle-symbol-two"/>
                 <GiSpades className="card03-middle-symbol-three"/>
               </>
    } else if (suit === 'hearts') {
        return <>
                 <GiHearts className="card03-middle-symbol-one red"/>
                 <GiHearts className="card03-middle-symbol-two red"/>
                 <GiHearts className="card03-middle-symbol-three red"/>
               </>
    } else if (suit === 'clubs') {
      return <>
                <GiClubs className="card03-middle-symbol-one"/>
                <GiClubs className="card03-middle-symbol-two"/>
                <GiClubs className="card03-middle-symbol-three"/>
                
             </>
    } else if (suit === 'diamonds') {
      return <>
                  <GiDiamonds className="card03-middle-symbol-one red diamond"/>
                  <GiDiamonds className="card03-middle-symbol-two red diamond"/>
                  <GiDiamonds className="card03-middle-symbol-three red diamond"/>
             </>
    }
  }

  return (
    <div className="card03-frame">
    <p className={(suit === 'spades' || suit === 'clubs') ? 'card03-first-digit' : 'card02-first-digit red'}>3</p>
    <p className={(suit === 'spades' || suit === 'clubs') ? 'card03-second-digit' : 'card02-second-digit red'}>3</p>
     {renderFirstSymbol(suit)}
     {renderSecondSymbol(suit)}

     {renderMiddleSymbolsCard03(suit)}
 </div>
  )
}

export default Card03