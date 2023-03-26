import { GiClubs, GiDiamonds, GiSpades, GiHearts, GiSharpAxe } from "react-icons/gi";
import './jack.css'

const Jack = ({suit}) => {
  const renderFirstSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="jack-first-symbol"/>
    } else if (suit === 'hearts') {
        return <GiHearts className="jack-first-symbol red"/>
    }  else if (suit === 'clubs') {
      return <GiClubs className="jack-first-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="jack-first-symbol red"/>
    }
}

const renderSecondSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="jack-second-symbol"/>
    } else if(suit === 'hearts') {
        return <GiHearts className="jack-second-symbol red"/>
    } else if(suit === 'clubs') {
      return <GiClubs className="jack-second-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="jack-first-symbol red"/>
    }
  }

  return (
    <div className="jack-frame">
    <p className={(suit === 'spades' || suit === 'clubs') ? 'jack-first-letter black' : 'jack-first-letter red'}>J</p>
    <p className={(suit === 'spades' || suit === 'clubs') ? 'jack-second-letter black' : 'jack-second-letter red'}>J</p>
   
     {renderFirstSymbol(suit)}
     {renderSecondSymbol(suit)}

     <GiSharpAxe className={(suit === 'spades' || suit === 'clubs') ? 'top-axe black' : 'top-axe red'} />
     <GiSharpAxe className={(suit === 'spades' || suit === 'clubs') ? 'bottom-axe black' : 'bottom-axe red'} />
 </div>
  )
}

export default Jack