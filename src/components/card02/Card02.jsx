import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import './card02.css'

const Card02 = ({suit}) => {

  const renderFirstSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card02-first-symbol"/>
    } else if (suit === 'hearts') {
      return <GiHearts className="card02-first-symbol red"/>
    } else if (suit === 'clubs') {
      return <GiClubs className="card02-first-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="card02-first-symbol red"/>
    }
  }

  const renderSecondSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card02-second-symbol"/>
    }
    else if (suit === 'hearts') {
      return <GiHearts className="card02-second-symbol red"/>
    } else if (suit === 'clubs') {
      return <GiClubs className="card02-second-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="card02-second-symbol red"/>
    }
  }

  const renderMiddleSymbolsCard02 = (suit) => {
    if(suit === 'spades') {
        return <>
                 <GiSpades className="card02-middle-symbol-one"/>
                 <GiSpades className="card02-middle-symbol-two"/>
               </>
    } else if (suit === 'hearts') {
        return <>
                 <GiHearts className="card02-middle-symbol-one red"/>
                 <GiHearts className="card02-middle-symbol-two red"/>
               </>
    } else if (suit === 'clubs') {
      return <>
                <GiClubs className="card02-middle-symbol-one"/>
                <GiClubs className="card02-middle-symbol-two"/>
             </>
    } else if (suit === 'diamonds') {
      return <>
                  <GiDiamonds className="card02-middle-symbol-one red diamond"/>
                  <GiDiamonds className="card02-middle-symbol-two red diamond"/>
             </>
    }
  }

  return (
    <div className="card02-frame">
    <p className={(suit === 'spades' || suit === 'clubs') ? 'card02-first-digit' : 'card02-first-digit red'}>2</p>
    <p className={(suit === 'spades' || suit === 'clubs') ? 'card02-second-digit' : 'card02-second-digit red'}>2</p>

     {renderFirstSymbol(suit)}
     {renderSecondSymbol(suit)}

     {renderMiddleSymbolsCard02(suit)}
 </div>
  )
}

export default Card02