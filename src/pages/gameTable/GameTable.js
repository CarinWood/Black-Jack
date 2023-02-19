import React, { useState, useEffect } from "react";
import './gameTable.css'
import { Deck } from "../../data/deck/Deck";

const GameTable = () => {
  const [countDealerCards, setCountDealerCards] = useState(0)
  const [firstDealerCard, setFirstDealerCard] = useState(false);

  useEffect(() => {
      if(countDealerCards === 1) {
        setFirstDealerCard(true)
      }


  },[countDealerCards])

   const drawDealerCards = () => {
    setCountDealerCards(countDealerCards + 1);
  }

  const drawFirstCard = () => {
    console.log('drawfirstcard function')
    let card = Deck[0];
    Deck.splice(0, 1);
    return card
  
  }



  return (
    <div className="game-table">
      <div className="dealers-box">

        <div className="first-dealer-card">
          {firstDealerCard === true ? drawFirstCard() : ''}
        </div>
     
      
      </div>
 
      <div className='user-box'>
      <button className='stand-btn'>Stand</button>
      <button className='hit-btn' onClick={()=> drawDealerCards()}>Hit</button>
    </div>
    </div>
  );
};

export default GameTable;
