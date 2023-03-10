import React, { useState, useEffect } from "react";
import './gameTable.css'
import { Deck } from "../../data/deck/Deck";
import { MdArrowDropDown } from "react-icons/md";
import cardsound from '../../assets/audio/cardsound.mp3';

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
  const [fourthUserCard, setFourthUserCard] = useState(false);
  const [fifthUserCard, setFifthUserCard] = useState(false);
  const [sixthUserCard, setSixthUserCard] = useState(false);
  const [seventhUserCard, setSeventhUserCard] = useState(false);

  const [userPoints, setUserPoints] = useState(0);
  const [dealerPoints, setDealerPoints] = useState(0);

  const [greenBetted, setGreenBetted] = useState(false);
  const [redBetted, setRedBetted] = useState(false);
  const [blueBetted, setBlueBetted] = useState(false);
  const [blackBetted, setBlackBetted] = useState(false);

  const [hasUserWon, setHasUserWon] = useState(false);


  useEffect(() => {
    updateUserPoints(0)

  }, [])
 

  

  useEffect(() => {
      if(countDealerCards === 1) {
        setFirstDealerCard(true);
        updateDealerPoints(Deck[Deck.length-1].value);
      } 
      
      else if (countDealerCards === 2) {
        setSecondDealerCard(true);
        updateDealerPoints(Deck[Deck.length-2].value);
        const res = Deck[Deck.length-1].value + Deck[Deck.length-2].value;
         if(res <= 16) {
          drawDealerCards();
        } else {
          checkWhoWon();
        }
    
      } else if (countDealerCards === 3) {
        setThirdDealerCard(true);
        updateDealerPoints(Deck[Deck.length-3].value);
        const res = Deck[Deck.length-1].value + Deck[Deck.length-2].value + Deck[Deck.length-3].value;
        if(res <= 16) {
          drawDealerCards();
        }else {
          checkWhoWon();
        }
      } else if (countDealerCards === 4) {
        setFourthDealerCard(true);
        updateDealerPoints(Deck[Deck.length-4].value);
          const res = Deck[Deck.length-1].value + Deck[Deck.length-2].value + Deck[Deck.length-3].value + Deck[Deck.length-4].value;
        if(res <= 16) {
          drawDealerCards();
        }else {
          checkWhoWon();
        }
      } else if (countDealerCards === 5) {
        setFifthDealerCard(true)
        updateDealerPoints(Deck[Deck.length-5].value);
        const res = Deck[Deck.length-1].value + Deck[Deck.length-2].value + Deck[Deck.length-3].value + Deck[Deck.length-4].value + Deck[Deck.length-5].value;
        
        if(res <= 16) {
          
          drawDealerCards();
        }else {
          checkWhoWon();
        }
      } else if (countDealerCards === 6) {
        setSixthDealerCard(true)
        updateDealerPoints(Deck[Deck.length-6].value);
        const res = Deck[Deck.length-1].value + Deck[Deck.length-2].value + Deck[Deck.length-3].value + Deck[Deck.length-4].value + Deck[Deck.length-5].value + Deck[Deck.length-6].value;
        if(res <= 16) {
          drawDealerCards();
        }else {
          checkWhoWon();
        }
      } else if (countDealerCards === 7) {
        setSeventhDealerCard(true);
        updateDealerPoints(Deck[Deck.length-7].value);
        const res = Deck[Deck.length-1].value + Deck[Deck.length-2].value + Deck[Deck.length-3].value + Deck[Deck.length-4].value + Deck[Deck.length-5].value + Deck[Deck.length-6].value + Deck[Deck.length-7].value;
        if(res <= 16) {
          drawDealerCards();
        }else {
          checkWhoWon();
        }
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
    else if (countUserCards === 4) {
      setFourthUserCard(true)
      updateUserPoints(Deck[3].value);
   
    }
    else if (countUserCards === 5) {
      setFifthUserCard(true);
      updateUserPoints(Deck[4].value);
   
    }
    else if (countUserCards === 6) {
      setSixthUserCard(true);
      updateUserPoints(Deck[5].value);
     
    }
    else if (countUserCards === 7) {
      setSeventhUserCard(true);
      updateUserPoints(Deck[6].value);
   
    }
  
  }, [countUserCards])


   const drawDealerCards = () => {
   
      setTimeout(() => {
          setCountDealerCards(countDealerCards + 1)
      }, 500)
   
  }

  const drawUserCards = () => {
    playCardSound()
    setCountUserCards(countUserCards + 1);
  }

  const drawFirstCard = () => {
    let card = Deck[Deck.length-1];
    return card.face;
  
  }

  const drawSecondCard = () => {
    let card = Deck[Deck.length-2];
    return card.face;
  }

  const drawThirdCard = () => {
    let card = Deck[Deck.length-3];
    return card.face;
  }
 
  const drawFourthCard = () => {
    let card = Deck[Deck.length-4];
    return card.face;
  }
 
  const drawFifthCard = () => {
    let card = Deck[Deck.length-5];
    return card.face;
  }

  const drawSixthCard = () => {
    let card = Deck[Deck.length-6];
    return card.face;
  }

  const drawSeventhCard = () => {
    let card = Deck[Deck.length-7];
    return card.face;
  }





const updateUserPoints = (points) => {
  setUserPoints(userPoints + points);
}

const updateDealerPoints = (points) => {
  setDealerPoints(dealerPoints + points);

}


const betGreenChip = () => {
  setGreenBetted(true);
  setTimeout(() => {
    setCountUserCards(1);
    setFirstUserCard(true);
  }, '500')

  setTimeout(() => {
    setCountDealerCards(1);
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
    setCountDealerCards(1);
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
    setCountDealerCards(1);
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
    setCountDealerCards(1);
  }, '700')

  setTimeout(() => {
   setCountUserCards(2);
   setSecondUserCard(true);
  }, '900') 
}

const checkWhoWon = () => {
  console.log("this is check who won-function!")
  
  let dealerRes = 0;
  console.log(countDealerCards)
  if(countDealerCards === 2) {
    dealerRes = Deck[Deck.length-1].value + Deck[Deck.length-2].value;
  }
  else if (countDealerCards === 3) {
    dealerRes = Deck[Deck.length-1].value + Deck[Deck.length-2].value + Deck[Deck.length-3].value;
  }
  else if (countDealerCards === 4) {
    dealerRes = Deck[Deck.length-1].value + Deck[Deck.length-2].value + Deck[Deck.length-3].value + Deck[Deck.length-4].value;
  }
  else if (countDealerCards === 5) {
    dealerRes = Deck[Deck.length-1].value + Deck[Deck.length-2].value + Deck[Deck.length-3].value + Deck[Deck.length-4].value + Deck[Deck.length-5].value;
  }
  else if (countDealerCards === 6) {
    dealerRes = Deck[Deck.length-1].value + Deck[Deck.length-2].value + Deck[Deck.length-3].value + Deck[Deck.length-4].value + Deck[Deck.length-5].value + Deck[Deck.length-6].value;
  }
  else if (countDealerCards === 7) {
    dealerRes = Deck[Deck.length-1].value + Deck[Deck.length-2].value + Deck[Deck.length-3].value + Deck[Deck.length-4].value + Deck[Deck.length-5].value + Deck[Deck.length-6].value + Deck[Deck.length-7].value;
  }

  console.log('dealer points: ' + dealerRes + ' user points: ' + userPoints)
  
  if(dealerRes > 21 && userPoints <= 21) {
    setHasUserWon(true);
  }
}




const renderUserSum = () => {
  if(countUserCards === 1 || countUserCards === 2) {
    return <div className="user-sum">{userPoints}</div>;
  } else if (countUserCards === 3) {
    return <div className="user-sum user-sum-2">{userPoints}</div>;
  } else if (countUserCards === 4) {
    return <div className="user-sum user-sum-3">{userPoints}</div>
  } else if (countUserCards === 5) {
    return <div className="user-sum user-sum-4">{userPoints}</div>
  } else if (countUserCards === 6) {
    return <div className="user-sum user-sum-5">{userPoints}</div>
  } else if (countUserCards >= 7) {
    return <div className="user-sum user-sum-6">{userPoints}</div>
  }
}

const renderDealerSum = () => {
  if(countDealerCards === 1) {
    return <div className="dealer-sum">{dealerPoints}</div>
  } else if (countDealerCards === 2) {
    return <div className="dealer-sum dealer-sum-1">{dealerPoints}</div>
  } else if (countDealerCards === 3) {
    return <div className="dealer-sum dealer-sum-2">{dealerPoints}</div>;
  } else if (countDealerCards === 4) {
    return <div className="dealer-sum dealer-sum-3">{dealerPoints}</div>
  } else if (countDealerCards === 5) {
    return <div className="dealer-sum dealer-sum-4">{dealerPoints}</div>
  } else if (countDealerCards === 6) {
    return <div className="dealer-sum dealer-sum-5">{dealerPoints}</div>
  } else if (countDealerCards >= 7) {
    return <div className="dealer-sum dealer-sum-6">{dealerPoints}</div>
  }
  
}

const playCardSound = () => {
  new Audio(cardsound).play();
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
      {renderDealerSum()}
      {hasUserWon && <div className="won-box">You Won!</div>}
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
        <div className={fourthUserCard ? "fourth-user-card active4": "fourth-user-card"}>
        {fourthUserCard ? Deck[3].face : ''}
        </div>
        <div className={fifthUserCard ? "fifth-user-card active5": "fifth-user-card"}>
        {fifthUserCard ? Deck[4].face : ''}
        </div>
        <div className={sixthUserCard ? "sixth-user-card active6": "sixth-user-card"}>
        {sixthUserCard ? Deck[5].face : ''}
        </div>
        <div className={seventhUserCard ? "seventh-user-card active7": "seventh-user-card"}>
        {seventhUserCard ? Deck[6].face : ''}
        </div>
      </div>
      {renderUserSum()}
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
