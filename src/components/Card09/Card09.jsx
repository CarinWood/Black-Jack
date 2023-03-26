import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import './card09.css'

const Card09 = ({suit}) => {
  const renderFirstSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card09-first-symbol"/>
    } else if (suit === 'hearts') {
        return <GiHearts className="card09-first-symbol red"/>
    } else if (suit === 'clubs') {
      return <GiClubs className="card09-first-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="card09-first-symbol red"/>
    }
}

const renderSecondSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card09-second-symbol"/>
    } else if(suit === 'hearts') {
        return <GiHearts className="card09-second-symbol red"/>
    } else if (suit === 'clubs') {
      return <GiClubs className="card09-second-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="card09-second-symbol red "/>
    }
  }

  const renderMiddleSymbolsCard09 = (suit) => {
    if(suit === 'spades') {
        return <>
                 <GiSpades className="card09-middle-symbol-one"/>
                 <GiSpades className="card09-middle-symbol-two"/>
                 <GiSpades className="card09-middle-symbol-three"/>
                 <GiSpades className="card09-middle-symbol-four"/>
                 <GiSpades className="card09-middle-symbol-five"/>
                 <GiSpades className="card09-middle-symbol-six"/>
                 <GiSpades className="card09-middle-symbol-seven"/>
                 <GiSpades className="card09-middle-symbol-eight"/>
                 <GiSpades className="card09-middle-symbol-nine"/>
               </>
    } else if (suit === 'hearts') {
        return <>
                 <GiHearts className="card09-middle-symbol-one red hearts"/>
                 <GiHearts className="card09-middle-symbol-two red hearts"/>
                 <GiHearts className="card09-middle-symbol-three red hearts"/>
                 <GiHearts className="card09-middle-symbol-four red hearts"/>
                 <GiHearts className="card09-middle-symbol-five red hearts"/>
                 <GiHearts className="card09-middle-symbol-six red hearts"/>
                 <GiHearts className="card09-middle-symbol-seven red hearts"/>
                 <GiHearts className="card09-middle-symbol-eight red hearts"/>
                 <GiHearts className="card09-middle-symbol-nine red hearts"/>
               </>
    } else if (suit === 'clubs') {
      return <>
                <GiClubs className="card09-middle-symbol-one"/>
                <GiClubs className="card09-middle-symbol-two"/>
                <GiClubs className="card09-middle-symbol-three"/>
                <GiClubs className="card09-middle-symbol-four"/>
                <GiClubs className="card09-middle-symbol-five"/>
                <GiClubs className="card09-middle-symbol-six"/>
                <GiClubs className="card09-middle-symbol-seven"/>
                <GiClubs className="card09-middle-symbol-eight"/>
                <GiClubs className="card09-middle-symbol-nine"/>
                
             </>
    } else if (suit === 'diamonds') {
      return <>
                  <GiDiamonds className="card09-middle-symbol-one red diamond"/>
                  <GiDiamonds className="card09-middle-symbol-two red diamond"/>
                  <GiDiamonds className="card09-middle-symbol-three red diamond"/>
                  <GiDiamonds className="card09-middle-symbol-four red diamond"/>
                  <GiDiamonds className="card09-middle-symbol-five red diamond"/>
                  <GiDiamonds className="card09-middle-symbol-six red diamond"/>
                  <GiDiamonds className="card09-middle-symbol-seven red diamond"/>
                  <GiDiamonds className="card09-middle-symbol-eight red diamond"/>
                  <GiDiamonds className="card09-middle-symbol-nine red diamond"/>
             </>
    }
  }


  return (
    <div className="card09-frame">
      <p className={(suit === 'spades' || suit === 'clubs') ? 'card09-first-digit' : 'card09-first-digit red'}>9</p>
      <p className={(suit === 'spades' || suit === 'clubs') ? 'card09-second-digit' : 'card09-second-digit red'}>9</p>
      
      {renderFirstSymbol(suit)}
      {renderSecondSymbol(suit)}

      
      {renderMiddleSymbolsCard09(suit)}
 </div>
  )
}

export default Card09