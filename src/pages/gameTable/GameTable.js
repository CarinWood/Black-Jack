import React, { useState, useEffect } from "react";
import './gameTable.css'
import { Deck } from "../../data/deck/Deck";

const GameTable = () => {
  const [countDealerCards, setCountDealerCards] = useState(0)
  const [countUserCards, setCountUserCards] = useState(0)

  const [firstDealerCard, setFirstDealerCard] = useState(false);
  const [secondDealerCard, setSecondDealerCard] = useState(false);
  const [thirdDealerCard, setThirdDealerCard] = useState(false);
  const [fourthDealerCard, setFourthDealerCard] = useState(false);
  const [fifthDealerCard, setFifthDealerCard] = useState(false);
  const [sixthDealerCard, setSixthDealerCard] = useState(false);
  const [seventhDealerCard, setSeventhDealerCard] = useState(false);

  const [firstUserCard, setFirstUserCard] = useState(false);
  const [secondUserCard, setSecondUserCard] = useState(false);
  const [thirdUserCard, setThirdUserCard] = useState(false);

  const [userPointsArray, setUserPointsArray] = useState([]);


  useEffect(() => {
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

  useEffect(() => {
    if(countUserCards === 1) {
      setFirstUserCard(true);
    
    } else if(countUserCards === 2) {
      setSecondUserCard(true);
   
    }
    else if (countUserCards === 3) {
      setThirdUserCard(true)
 
    }
  }, [countUserCards])



   const drawDealerCards = () => {
    setCountDealerCards(countDealerCards + 1);
  }

  const drawUserCards = () => {
    setCountUserCards(countUserCards + 1);
  }

  const drawFirstCard = () => {
    console.log('drawfirstcard function')
    let card = Deck[0];
    return card.face;
  
  }

  const drawSecondCard = () => {
    let card = Deck[1];
    return card.face;
  }

  const drawThirdCard = () => {
    let card = Deck[2];
    return card.face;
  }
 
  const drawFourthCard = () => {
    let card = Deck[3];
    return card.face;
  }
 
  const drawFifthCard = () => {
    let card = Deck[4];
    return card.face;
  }

  const drawSixthCard = () => {
    let card = Deck[2];
    return card.face;
  }

  const drawSeventhCard = () => {
    let card = Deck[2];
    return card.face;
  }


  const drawFirstUserCard = () => {
    let card = Deck[0]
    setUserPointsArray(current => [...current, card.value]);
    return card.face;
  }

  const drawSecondUserCard = () => {
    let card = Deck[1]
    setUserPointsArray(current => [...current, card.value]);
    return card.face;
  }

  const drawThirdUserCard = () => {
    let card = Deck[2]
    setUserPointsArray(current => [...current, card.value]);
    return card.face;
  }




const getSum = () => {
  let sum = 0;
  userPointsArray.forEach(element => {
    sum += element
})
  return sum
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

      <div className="user-card-area">
        <div className={firstUserCard ? "first-user-card active1": "first-user-card"}>
        {firstUserCard ? drawFirstUserCard(): ''}
        </div>
        <div className={secondUserCard ? "second-user-card active2": "second-user-card"}>
        {secondUserCard ? drawSecondUserCard(): ''}
        </div>
        <div className={thirdUserCard ? "third-user-card active3": "third-user-card"}>
        {thirdUserCard ? drawThirdUserCard(): ''}
        </div>
      </div>

      <div className="user-sum">{getSum()}</div>
      <div className='user-box'>
      <button className='stand-btn' onClick={()=> drawDealerCards()}>Stand</button>
      <button className='hit-btn' onClick={() => drawUserCards()}>Hit</button>
    </div>
    </div>
  );
};

export default GameTable;
