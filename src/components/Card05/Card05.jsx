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

      const renderMiddleSymbolsCard05 = (suit) => {
        if(suit === 'spades') {
            return <>
                     <GiSpades className="card05-middle-symbol-one"/>
                     <GiSpades className="card05-middle-symbol-two"/>
                     <GiSpades className="card05-middle-symbol-three"/>
                     <GiSpades className="card05-middle-symbol-four"/>
                     <GiSpades className="card05-middle-symbol-five"/>
                   </>
        } else if (suit === 'hearts') {
            return <>
                     <GiHearts className="card05-middle-symbol-one red hearts"/>
                     <GiHearts className="card05-middle-symbol-two red hearts"/>
                     <GiHearts className="card05-middle-symbol-three red hearts"/>
                     <GiHearts className="card05-middle-symbol-four red hearts"/>
                     <GiHearts className="card05-middle-symbol-five red hearts"/>
                   </>
        } else if (suit === 'clubs') {
          return <>
                    <GiClubs className="card05-middle-symbol-one"/>
                    <GiClubs className="card05-middle-symbol-two"/>
                    <GiClubs className="card05-middle-symbol-three"/>
                    <GiClubs className="card05-middle-symbol-four"/>
                    <GiClubs className="card05-middle-symbol-five"/>
                    
                 </>
        } else if (suit === 'diamonds') {
          return <>
                      <GiDiamonds className="card05-middle-symbol-one red diamond"/>
                      <GiDiamonds className="card05-middle-symbol-two red diamond"/>
                      <GiDiamonds className="card05-middle-symbol-three red diamond"/>
                      <GiDiamonds className="card05-middle-symbol-four red diamond"/>
                      <GiDiamonds className="card05-middle-symbol-five red diamond"/>
                 </>
        }
      }

  return (
    <div className="card05-frame">
        <p className={(suit === 'spades' || suit === 'clubs') ? 'card05-first-digit' : 'card05-first-digit red'}>5</p>
        <p className={(suit === 'spades' || suit === 'clubs') ? 'card05-second-digit' : 'card05-second-digit red'}>5</p>
        {renderFirstSymbol(suit)}
        {renderSecondSymbol(suit)}

        {renderMiddleSymbolsCard05(suit)}
    </div>
  )
}

export default Card05