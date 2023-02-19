import React, { useState, useEffect } from "react";
import './gameTable.css'
import { Deck } from "../../data/deck/Deck";

const GameTable = () => {
  const [countDealerCards, setCountDealerCards] = useState(0)
  const [firstDealerCard, setFirstDealerCard] = useState(false);
  const [secondDealerCard, setSecondDealerCard] = useState(false);

  useEffect(() => {
      console.log(countDealerCards)
      if(countDealerCards === 1) {
        setFirstDealerCard(true);
      } else if (countDealerCards === 2) {
        setSecondDealerCard(true);
      }


  },[countDealerCards])

   const drawDealerCards = () => {
    setCountDealerCards(countDealerCards + 1);
  }

  const drawFirstCard = () => {
    console.log('drawfirstcard function')
   
    let card = Deck[0];
    return card;
  
  }

  const drawSecondCard = () => {
    console.log('drawSecondCard function');
    let Card = Deck[1];
    return Card;
  }



  return (
    <div className="game-table">
      <div className="dealers-box">
     
                {/* First Dealer card */}
        <div className="first-dealer-card">
          {firstDealerCard === true ? drawFirstCard() : ''}
        </div>
                {/* Second Dealer card */}
        <div className="second-dealer-card">
          {secondDealerCard === true ? drawSecondCard() : ''}
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
