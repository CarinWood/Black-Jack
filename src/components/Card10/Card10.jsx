import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import './card10.css'

const Card10 = ({suit}) => {
  const renderFirstSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card10-first-symbol"/>
    } else if (suit === 'hearts') {
        return <GiHearts className="card10-first-symbol red"/>
    } else if (suit === 'clubs') {
      return <GiClubs className="card10-first-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="card10-first-symbol red"/>
    }
}

const renderSecondSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="card10-second-symbol"/>
    } else if(suit === 'hearts') {
        return <GiHearts className="card10-second-symbol red"/>
    } else if (suit === 'diamonds') {
        return <GiDiamonds className="card10-second-symbol red"/>
    }
  }

  const renderMiddleSymbolsCard10 = (suit) => {
    if(suit === 'spades') {
        return <>
                 <GiSpades className="card10-middle-symbol-one"/>
                 <GiSpades className="card10-middle-symbol-two"/>
                 <GiSpades className="card10-middle-symbol-three"/>
                 <GiSpades className="card10-middle-symbol-four"/>
                 <GiSpades className="card10-middle-symbol-five"/>
                 <GiSpades className="card10-middle-symbol-six"/>
                 <GiSpades className="card10-middle-symbol-seven"/>
                 <GiSpades className="card10-middle-symbol-eight"/>
                 <GiSpades className="card10-middle-symbol-nine"/>
                 <GiSpades className="card10-middle-symbol-ten"/>
               </>
    } else if (suit === 'hearts') {
        return <>
                 <GiHearts className="card10-middle-symbol-one red heartsLeft"/>
                 <GiHearts className="card10-middle-symbol-two red heartsRight"/>
                 <GiHearts className="card10-middle-symbol-three red  heartsLeft"/>
                 <GiHearts className="card10-middle-symbol-four red heartsRight"/>
                 <GiHearts className="card10-middle-symbol-five red heartsLeft"/>
                 <GiHearts className="card10-middle-symbol-six red heartsRight"/>
                 <GiHearts className="card10-middle-symbol-seven red heartsLeft"/>
                 <GiHearts className="card10-middle-symbol-eight red heartsRight"/>
                 <GiHearts className="card10-middle-symbol-nine red heartsOne"/>
                 <GiHearts className="card10-middle-symbol-ten red heartsTwo"/>
               </>
    } else if (suit === 'clubs') {
      return <>
                <GiClubs className="card10-middle-symbol-one"/>
                <GiClubs className="card10-middle-symbol-two"/>
                <GiClubs className="card10-middle-symbol-three"/>
                <GiClubs className="card10-middle-symbol-four"/>
                <GiClubs className="card10-middle-symbol-five"/>
                <GiClubs className="card10-middle-symbol-six"/>
                <GiClubs className="card10-middle-symbol-seven"/>
                <GiClubs className="card10-middle-symbol-eight"/>
                <GiClubs className="card10-middle-symbol-nine"/>
                <GiClubs className="card10-middle-symbol-ten"/>
                
             </>
    } else if (suit === 'diamonds') {
      return <>
                  <GiDiamonds className="card10-middle-symbol-one red diamondsLeft"/>
                  <GiDiamonds className="card10-middle-symbol-two red diamondsRight"/>
                  <GiDiamonds className="card10-middle-symbol-three red diamondsLeft"/>
                  <GiDiamonds className="card10-middle-symbol-four red diamondsRight"/>
                  <GiDiamonds className="card10-middle-symbol-five red diamondsLeft"/>
                  <GiDiamonds className="card10-middle-symbol-six red diamondsRight"/>
                  <GiDiamonds className="card10-middle-symbol-seven red diamondsLeft"/>
                  <GiDiamonds className="card10-middle-symbol-eight red diamondsRight"/>
                  <GiDiamonds className="card10-middle-symbol-nine red diamondsOne"/>
                  <GiDiamonds className="card10-middle-symbol-ten red diamondsTwo"/>
             </>
    }
  }


  return (
    <div className="card10-frame">
      <p className={(suit === 'spades' || suit === 'clubs') ? 'card10-first-digit' : 'card10-first-digit red'}>10</p>
      <p className={(suit === 'spades' || suit === 'clubs') ? 'card10-second-digit' : 'card10-second-digit red'}>10</p>
     {renderFirstSymbol(suit)}
     {renderSecondSymbol(suit)}

     {renderMiddleSymbolsCard10(suit)}
 </div>
  )
}

export default Card10