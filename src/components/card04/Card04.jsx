import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import './card04.css'

const Card04 = ({suit}) => {

  const renderFirstSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card04-first-symbol"/>
    } else if (suit === 'hearts') {
      return <GiHearts className="card04-first-symbol red"/>
    } else if (suit === 'clubs') {
      return <GiClubs className="card04-first-symbol "/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="card04-first-symbol red"/>
    }

  }

  const renderSecondSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card04-second-symbol"/>
    } else if(suit === 'hearts') {
      return <GiHearts className="card04-second-symbol red"/>
    } else if(suit === 'clubs') {
      return <GiClubs className="card04-second-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="card04-second-symbol red"/>
    }
  }

  const renderMiddleSymbolsCard04 = (suit) => {
    if(suit === 'spades') {
        return <>
                 <GiSpades className="card04-middle-symbol-one"/>
                 <GiSpades className="card04-middle-symbol-two"/>
                 <GiSpades className="card04-middle-symbol-three"/>
                 <GiSpades className="card04-middle-symbol-four"/>
               </>
    } else if (suit === 'hearts') {
        return <>
                 <GiHearts className="card04-middle-symbol-one red"/>
                 <GiHearts className="card04-middle-symbol-two red"/>
                 <GiHearts className="card04-middle-symbol-three red"/>
                 <GiHearts className="card04-middle-symbol-four red"/>
               </>
    } else if (suit === 'clubs') {
      return <>
                <GiClubs className="card04-middle-symbol-one"/>
                <GiClubs className="card04-middle-symbol-two"/>
                <GiClubs className="card04-middle-symbol-three"/>
                <GiClubs className="card04-middle-symbol-four"/>
                
             </>
    } else if (suit === 'diamonds') {
      return <>
                  <GiDiamonds className="card04-middle-symbol-one red diamond"/>
                  <GiDiamonds className="card04-middle-symbol-two red diamond"/>
                  <GiDiamonds className="card04-middle-symbol-three red diamond"/>
                  <GiDiamonds className="card04-middle-symbol-four red diamond"/>
             </>
    }
  }

  return (
    <div className="card06-frame">
   <p className={(suit === 'spades' || suit === 'clubs') ? 'card04-first-digit' : 'card04-first-digit red'}>4</p>
    <p className={(suit === 'spades' || suit === 'clubs') ? 'card04-second-digit' : 'card04-second-digit red'}>4</p>
     {renderFirstSymbol(suit)}
     {renderSecondSymbol(suit)}

     {renderMiddleSymbolsCard04(suit)}
 </div>
  )
}

export default Card04