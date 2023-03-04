import React, { useState, useEffect } from "react";
import './gameTable.css'
import { Deck } from "../../data/deck/Deck";
import { MdArrowDropDown } from "react-icons/md";

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

  const [userPoints, setUserPoints] = useState(0);

  const [greenBetted, setGreenBetted] = useState(false);
  const [redBetted, setRedBetted] = useState(false);
  const [blueBetted, setBlueBetted] = useState(false);
  const [blackBetted, setBlackBetted] = useState(false);


  useEffect(() => {
    updateUserPoints(0)
  }, [])
 


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
      updateUserPoints(Deck[0].value)
    
    } else if(countUserCards === 2) {
      setSecondUserCard(true);
      updateUserPoints(Deck[1].value)
   
    }
    else if (countUserCards === 3) {
      setThirdUserCard(true)
      updateUserPoints(Deck[2].value)
 
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
    return card.face;
  }

  const drawSecondUserCard = () => {
    let card = Deck[1]

    return card.face;
  }

  const drawThirdUserCard = () => {
    let card = Deck[2]

    return card.face;
  }


const updateUserPoints = (points) => {
  setUserPoints(userPoints + points);
  console.log(userPoints);
}


const betGreenChip = () => {
  setGreenBetted(true);
  setTimeout(() => {
    setCountUserCards(1);
    setFirstUserCard(true);
  }, '500')

  setTimeout(() => {
   drawDealerCards()
  }, '700')

  setTimeout(() => {
   setCountUserCards(2);
   setSecondUserCard(true);
  }, '900')

}

const betRedChip = () => {
  setRedBetted(true);
  setTimeout(() => {
    setCountUserCards(1);
    setFirstUserCard(true);
  }, '500')

  setTimeout(() => {
   drawDealerCards()
  }, '700')

  setTimeout(() => {
   setCountUserCards(2);
   setSecondUserCard(true);
  }, '900')
}

const betBlueChip = () => {
  setBlueBetted(true);
  setTimeout(() => {
    setCountUserCards(1);
    setFirstUserCard(true);
  }, '500')

  setTimeout(() => {
   drawDealerCards()
  }, '700')

  setTimeout(() => {
   setCountUserCards(2);
   setSecondUserCard(true);
  }, '900')
}

const betBlackChip = () => {
  setBlackBetted(true);
  setTimeout(() => {
    setCountUserCards(1);
    setFirstUserCard(true);
  }, '500')

  setTimeout(() => {
   drawDealerCards()
  }, '700')

  setTimeout(() => {
   setCountUserCards(2);
   setSecondUserCard(true);
  }, '900') 
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
        {firstUserCard ? Deck[0].face : ''}
        </div>
        <div className={secondUserCard ? "second-user-card active2": "second-user-card"}>
        {secondUserCard ? Deck[1].face : ''}
        </div>
        <div className={thirdUserCard ? "third-user-card active3": "third-user-card"}>
        {thirdUserCard ? Deck[2].face : ''}
        </div>
      </div>

      <div className={countUserCards > 0 ? "user-sum" : "hidden"}>{userPoints}</div>
      <p className= {greenBetted || redBetted || blueBetted || blackBetted ? "place-bet-text hidden": "place-bet-text"}>Place Your Bet</p>
      <div className={greenBetted || redBetted || blueBetted || blackBetted ? 'user-box' : 'user-box hidden'}>
      <button className='stand-btn' onClick={()=> drawDealerCards()}>Stand</button>
      <button className='hit-btn' onClick={() => drawUserCards()}>Hit</button>
    </div>

    <div className={greenBetted || redBetted || blueBetted || blackBetted ? 'betting-box hide-chips': 'betting-box'}>
            <MdArrowDropDown className="arrow-1"/>
            <MdArrowDropDown className="arrow-2"/>
            <MdArrowDropDown className="arrow-3"/>
            <MdArrowDropDown className="arrow-4"/>
        <div className="chips">
            
            <div class={greenBetted ? "pokerchip betted-chip greenchip" : "pokerchip greenchip none-transition"} onClick={() => betGreenChip()}>100</div>
            <div class={redBetted? "pokerchip betted-chip redchip" : "pokerchip redchip none-transition"}  onClick={() => betRedChip()}>200</div>
            <div class={blueBetted? "pokerchip betted-chip bluechip" : "pokerchip bluechip none-transition"} onClick={() => betBlueChip()}>300</div>
            <div class={blackBetted? "pokerchip betted-chip blackchip" : "pokerchip blackchip none-transition"} onClick={() => betBlackChip()}>400</div>
        </div>
    </div>

    </div>
  );
};

export default GameTable;
