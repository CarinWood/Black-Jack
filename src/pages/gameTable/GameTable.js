import React, { useState, useEffect } from "react";
import './gameTable.css'
import { Deck } from "../../data/deck/Deck";
import King from "../../components/king/King";

const GameTable = () => {
  const [countDealerCards, setCountDealerCards] = useState(0)
  const [firstDealerCard, setFirstDealerCard] = useState(false);
  const [secondDealerCard, setSecondDealerCard] = useState(false);
  const [thirdDealerCard, setThirdDealerCard] = useState(false);
  const [fourthDealerCard, setFourthDealerCard] = useState(false);
  const [fifthDealerCard, setFifthDealerCard] = useState(false);
  const [sixthDealerCard, setSixthDealerCard] = useState(false);
  const [seventhDealerCard, setSeventhDealerCard] = useState(false);

  useEffect(() => {
      console.log(countDealerCards)
      if(countDealerCards === 1) {
        setFirstDealerCard(true);
      } else if (countDealerCards === 2) {
        setSecondDealerCard(true);
      } else if (countDealerCards === 3) {
        setThirdDealerCard(true);
      } else if (countDealerCards === 4) {
        setFourthDealerCard(true);
      } else if (countDealerCards === 5) {
        setFifthDealerCard(true)
      } else if (countDealerCards === 6) {
        setSixthDealerCard(true)
      } else if (countDealerCards === 7) {
        setSeventhDealerCard(true);
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
    let Card = Deck[1];
    return Card;
  }

  const drawThirdCard = () => {
    let Card = Deck[2];
    return Card;
  }
 
  const drawFourthCard = () => {
    let Card = Deck[3];
    return Card;
  }
 
  const drawFifthCard = () => {
    let Card = Deck[4];
    return Card;
  }

  const drawSixthCard = () => {
    let Card = Deck[5];
    return Card;
  }

  const drawSeventhCard = () => {
    let Card = Deck[6];
    return Card;
  }
  

  return (
    <div className="game-table">
      <div className="dealers-box">
     
                {/* First Dealer card */}
        <div className={firstDealerCard ? "first-dealer-card active1": "first-dealer-card"}>
          {firstDealerCard === true ? drawFirstCard() : ''}
        </div>
                {/* Second Dealer card */}
        <div className={secondDealerCard ? "second-dealer-card active2": "second-dealer-card"}>
          {secondDealerCard === true ? drawSecondCard() : ''}
        </div>
                {/* Third Dealer card */}
        <div className={thirdDealerCard ? "third-dealer-card active3": "third-dealer-card"}>
          {thirdDealerCard === true ? drawThirdCard() : ''}
        </div>
                {/* Fourth Dealer card */}
        <div className={fourthDealerCard ? "fourth-dealer-card active4": "fourth-dealer-card"}>
          {fourthDealerCard === true ? drawFourthCard() : ''}
        </div>
      
                {/* Fifth Dealer card */}
        <div className={fifthDealerCard ? "fifth-dealer-card active5": "fifth-dealer-card"}>
          {fifthDealerCard === true ? drawFifthCard() : ''}
        </div>
      
                {/* Sixth Dealer card */}
        <div className={sixthDealerCard ? "sixth-dealer-card active6": "sixth-dealer-card"}>
          {sixthDealerCard === true ? drawSixthCard() : ''}
        </div>
                {/* seventh Dealer card */}
        <div className={seventhDealerCard ? "seventh-dealer-card active7": "seventh-dealer-card"}>
          {seventhDealerCard === true ? drawSeventhCard() : ''}
        </div>
      
      </div>
    
      <div className='user-box'>
      <button className='stand-btn' onClick={()=> drawDealerCards()}>Stand</button>
      <button className='hit-btn'>Hit</button>
    </div>
    </div>
  );
};

export default GameTable;
