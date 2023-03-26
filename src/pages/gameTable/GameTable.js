import React, { useState, useEffect } from "react";
import './gameTable.css'
import { Deck } from "../../data/deck/Deck";
import { MdArrowDropDown } from "react-icons/md";
import Card05 from "../../components/Card05/Card05";
import Card06 from "../../components/Card06/Card06";
import Card07 from "../../components/card07/Card07";
import Card09 from "../../components/Card09/Card09";
import Card08 from "../../components/Card08/Card08";
import Card10 from "../../components/Card10/Card10";
import Card04 from "../../components/card04/Card04";
import Card03 from "../../components/card03/Card03";
import Card02 from "../../components/card02/Card02";
import Jack from "../../components/jack/Jack";
import King from "../../components/king/King";
import Queen from "../../components/queen/Queen";
import Ace from "../../components/ace/Ace";

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
  const [showWonChip, SetShowWonChip] = useState(false);

  const [isBlackJack, setBlackJack] = useState(false);
  const [showBJChip, setShowBJChip] = useState(false);

  const [disableHit, setDisableHit] = useState(false);
  const [disableStand, setDisableStand] = useState(false);

  const [isBust, setBust] = useState(false);
  const [dealerWins, setDealerWins] = useState(false);
  const [standOff, setStandOff] = useState(false);

  useEffect(() => {
    updateUserPoints(0)
    shuffleArray(Deck)
   

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
        let altRes = 0;
        if(Deck[Deck.length-1].value2 === 11 || Deck[Deck.length-2].value2 === 11) {
          if(res+10 <= 21) {
            altRes = res+10;
          }
       
        }
         if(res <= 16 && altRes <= 17) {
          drawDealerCards();
        } else {
          checkWhoWon();
        }
    
      } else if (countDealerCards === 3) {
        setThirdDealerCard(true);
        updateDealerPoints(Deck[Deck.length-3].value);
        const res = Deck[Deck.length-1].value + Deck[Deck.length-2].value + Deck[Deck.length-3].value;
        let altRes = 0;
        if(Deck[Deck.length-1].value2 === 11 || Deck[Deck.length-2].value2 === 11 || Deck[Deck.length-3].value2 === 11) {
          if(res+10 <= 21) {
            altRes = res+10;
          }
         
        }
        if(res <= 16 && altRes <= 17) {
          drawDealerCards();
        }else {
          checkWhoWon();
        }
      } else if (countDealerCards === 4) {
        setFourthDealerCard(true);
        updateDealerPoints(Deck[Deck.length-4].value);
          const res = Deck[Deck.length-1].value + Deck[Deck.length-2].value + Deck[Deck.length-3].value + Deck[Deck.length-4].value;
          let altRes = 0;
          if(Deck[Deck.length-1].value === 11 || Deck[Deck.length-2].value2 === 11 || Deck[Deck.length-3].value2 === 11 || Deck[Deck.length-4]. value2 === 11) {
            if(res+10 <= 21) {
               altRes = res+10;
            }
           
          }
          if(res <= 16 && altRes <= 17) {
          drawDealerCards();
        }else {
          checkWhoWon();
        }
      } else if (countDealerCards === 5) {
        setFifthDealerCard(true)
        updateDealerPoints(Deck[Deck.length-5].value);
        const res = Deck[Deck.length-1].value + Deck[Deck.length-2].value + Deck[Deck.length-3].value + Deck[Deck.length-4].value + Deck[Deck.length-5].value;
        let altRes = 0;
        if(Deck[Deck.length-1].value === 11 || Deck[Deck.length-2].value2 === 11 || Deck[Deck.length-3].value2 === 11 || Deck[Deck.length-4]. value2 === 11 || Deck[Deck.length-5].value2 === 11) {
          if(res+10 <= 21) {
               altRes = res+10;
          }
       
        }
        if(res <= 16 && altRes <= 17) {
          drawDealerCards();
        }else {
          checkWhoWon();
        }
      } else if (countDealerCards === 6) {
        setSixthDealerCard(true)
        updateDealerPoints(Deck[Deck.length-6].value);
        const res = Deck[Deck.length-1].value + Deck[Deck.length-2].value + Deck[Deck.length-3].value + Deck[Deck.length-4].value + Deck[Deck.length-5].value + Deck[Deck.length-6].value;
        let altRes = 0;
        if(Deck[Deck.length-1].value === 11 || Deck[Deck.length-2].value2 === 11 || Deck[Deck.length-3].value2 === 11 || Deck[Deck.length-4]. value2 === 11 || Deck[Deck.length-5].value2 === 11 || Deck[Deck.length-6].value2 === 11) {
          if(res+10 <= 21) {
            altRes = res+10;
       }
        }
        if(res <= 16 && altRes <= 17) {
          drawDealerCards();
        }else {
          checkWhoWon();
        }
      } else if (countDealerCards === 7) {
        setSeventhDealerCard(true);
        updateDealerPoints(Deck[Deck.length-7].value);
        // const res = Deck[Deck.length-1].value + Deck[Deck.length-2].value + Deck[Deck.length-3].value + Deck[Deck.length-4].value + Deck[Deck.length-5].value + Deck[Deck.length-6].value + Deck[Deck.length-7].value;
          checkWhoWon()
        
      }

  },[countDealerCards])

  useEffect(() => {
    if(countUserCards === 1) {
      updateUserPoints(Deck[0].value)

    
  
    
    } else if(countUserCards === 2) {
      setSecondUserCard(true);
      updateUserPoints(Deck[1].value)

      checkForBlackJack();
   
    }
    else if (countUserCards === 3) {
      setThirdUserCard(true)
      updateUserPoints(Deck[2].value)
  
      checkIfBust()
 
    }
    else if (countUserCards === 4) {
      setFourthUserCard(true)
      updateUserPoints(Deck[3].value);

      checkIfBust()
   
    }
    else if (countUserCards === 5) {
      setFifthUserCard(true);
      updateUserPoints(Deck[4].value);

      checkIfBust()
   
    }
    else if (countUserCards === 6) {
      setSixthUserCard(true);
      updateUserPoints(Deck[5].value);

      checkIfBust()
     
    }
    else if (countUserCards === 7) {
      setSeventhUserCard(true);
      updateUserPoints(Deck[6].value);

      checkIfBust()
   
    }
  
  }, [countUserCards])


   const drawDealerCards = () => {
    if(disableStand) {
      return;
    }
      setDisableHit(true);
      setTimeout(() => {
          setCountDealerCards(countDealerCards + 1)
      }, 800)
   
  }

  const drawUserCards = () => {
      if(disableHit) {
        return;
      }
  
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
  setDisableHit(true);
  setDisableStand(true);
  let dealerRes = 0;
  let altDealerRes = 0;
  let altUserRes = 0;

  if((Deck[0].value2 === 11) || (Deck[1].value2 === 11) || (Deck[2].value2 === 11) || (Deck[3].value2 === 11) || (Deck[4].value2 === 11) || (Deck[5].value2 === 11) || (Deck[6].value2 === 11)) {
    if(userPoints+10 <= 21) {
      altUserRes = userPoints+10
    }
  }




  if(countDealerCards === 2) {
    dealerRes = Deck[Deck.length-1].value + Deck[Deck.length-2].value;
    if(Deck[Deck.length-1].value2 === 11 || Deck[Deck.length-2].value2 === 11) {
      if(dealerRes+10 <= 21) {
        altDealerRes = dealerRes+10;
      } 
    }
  }
  else if (countDealerCards === 3) {
    dealerRes = Deck[Deck.length-1].value + Deck[Deck.length-2].value + Deck[Deck.length-3].value;
    if(Deck[Deck.length-1].value2 === 11 || Deck[Deck.length-2].value2 === 11 || Deck[Deck.length-3].value2 === 11) {
      if(dealerRes+10 <= 21) {
        altDealerRes = dealerRes+10
      }  
    }
  }
  else if (countDealerCards === 4) {
    dealerRes = Deck[Deck.length-1].value + Deck[Deck.length-2].value + Deck[Deck.length-3].value + Deck[Deck.length-4].value;
    if(Deck[Deck.length-1].value2 === 11 || Deck[Deck.length-2].value2 === 11 || Deck[Deck.length-3].value2 === 11 || Deck[Deck.length-4].value2 === 11) {
      if(dealerRes+10 <= 21) {
        altDealerRes = dealerRes+10
      }
    }
  }
  else if (countDealerCards === 5) {
    dealerRes = Deck[Deck.length-1].value + Deck[Deck.length-2].value + Deck[Deck.length-3].value + Deck[Deck.length-4].value + Deck[Deck.length-5].value;
    if(Deck[Deck.length-1].value2 === 11 || Deck[Deck.length-2].value2 === 11 || Deck[Deck.length-3].value2 === 11 || Deck[Deck.length-4].value2 === 11 || Deck[Deck.length-5].value2 === 11) {
      if(dealerRes+10 <= 21) {
        altDealerRes = dealerRes+10;
      }
    }
    
  }
  else if (countDealerCards === 6) {
    dealerRes = Deck[Deck.length-1].value + Deck[Deck.length-2].value + Deck[Deck.length-3].value + Deck[Deck.length-4].value + Deck[Deck.length-5].value + Deck[Deck.length-6].value;
    if(Deck[Deck.length-1].value2 === 11 || Deck[Deck.length-2].value2 === 11 || Deck[Deck.length-3].value2 === 11 || Deck[Deck.length-4].value2 === 11 || Deck[Deck.length-5].value2 === 11 || Deck[Deck.length-6].value2 === 11) {
      if(dealerRes <= 21) {
        altDealerRes = dealerRes+10;
      }
    }
  }
  else if (countDealerCards === 7) {
    dealerRes = Deck[Deck.length-1].value + Deck[Deck.length-2].value + Deck[Deck.length-3].value + Deck[Deck.length-4].value + Deck[Deck.length-5].value + Deck[Deck.length-6].value + Deck[Deck.length-7].value;
    if(Deck[Deck.length-1].value2 === 11 || Deck[Deck.length-2].value2 === 11 || Deck[Deck.length-3].value2 === 11 || Deck[Deck.length-4].value2 === 11 || Deck[Deck.length-5].value2 === 11 || Deck[Deck.length-6].value2 === 11 || Deck[Deck.length-7].value2 === 11) {
      if(dealerRes+10 <= 21) {
        altDealerRes = dealerRes+10;
      }
    }
  }


  console.log('userPoints: ' + userPoints);
  console.log('altUserRes: ' + altUserRes)
  console.log('dealerRes: ' + dealerRes);
  console.log('altDealerRes: ' + altDealerRes)


  if(altDealerRes === 0 && altUserRes === 0) {
    console.log('detta är första if-satsen')
    if(userPoints <= 21 && userPoints > dealerRes) {
    
      setTimeout(() => {
        setHasUserWon(true);
        SetShowWonChip(true);
      }, 1000)
     
       setTimeout(() => {
           resetGame();
       }, 3000)

    } else if (userPoints <= 21 && userPoints < dealerRes && dealerRes <= 21) {
      setDealerWins(true); 
       setTimeout(() => {
         resetGame();
     }, 3000)

    } else if (userPoints === dealerRes) {
      setStandOff(true);

      setTimeout(() => {
        resetGame();
    }, 3000)
    } else if (userPoints <= 21 && dealerRes > 21) {
          setTimeout(() => {
            setHasUserWon(true);
            SetShowWonChip(true);
          }, 1000)
        
          setTimeout(() => {
              resetGame();
          }, 3000)
    }

  } else if (altDealerRes === 0 && altUserRes !== 0) {
    if(altUserRes > dealerRes) {
      setHasUserWon(true);
      SetShowWonChip(true);

      setTimeout(() => {
        resetGame();
    }, 3000)

    } else if (dealerRes > altUserRes) {
      setDealerWins(true);

      setTimeout(() => {
        resetGame();
    }, 3000)

    } else if (dealerRes === altUserRes) {
      setStandOff(true)

      setTimeout(() => {
        resetGame();
    }, 3000)

    }
  } else if (altDealerRes !== 0 && altUserRes === 0) {
    if(altDealerRes > userPoints) {
      setDealerWins(true);

      setTimeout(() => {
        resetGame();
    }, 3000)

    } else if (userPoints > altDealerRes) {
      setHasUserWon(true);
      SetShowWonChip(true)

      setTimeout(() => {
        resetGame();
    }, 3000)

    } else if (userPoints === altDealerRes) {
      setStandOff(true);

      setTimeout(() => {
        resetGame();
    }, 3000)

    }
  } else if (altDealerRes === altUserRes) {
        setStandOff(true);

        setTimeout(() => {
          resetGame(); 
         }, 3000)
  }

   
 


}

const checkIfBust = () => {
  let userRes = 0;
  if(countUserCards === 3) {
    userRes = Deck[0].value + Deck[1].value + Deck[2].value;
  }
  else if (countUserCards === 4) {
    userRes = Deck[0].value + Deck[1].value + Deck[2].value + Deck[3].value;
  }
  else if (countUserCards === 5) {
    userRes = Deck[0].value + Deck[1].value + Deck[2].value + Deck[3].value + Deck[4].value;
  }
  else if (countUserCards === 6) {
    userRes = Deck[0].value + Deck[1].value + Deck[2].value + Deck[3].value + Deck[4].value + Deck[5].value;
  } 
  else if (countUserCards === 7) {
    userRes = Deck[0].value + Deck[1].value + Deck[2].value + Deck[3].value + Deck[4].value + Deck[5].value + Deck[6].value;
  }

  if(userRes > 21) {
    setBust(true);
    setDisableHit(true);
    setDisableStand(true);
    // setTimeout(() => {
    //     resetGame()
    // }, 2000)
  }
}




const renderUserSum = () => {
  if(countUserCards === 2) {
    if(Deck[0].value2 === 11 || Deck[1].value2 === 11) {
      if(userPoints+10 === 21) {
        return <div className="user-sum">21</div>;
      }
      else if(userPoints+10 <= 21) {
          return <div className="user-sum">{userPoints} / {userPoints+10}</div>;
      } else {
        return <div className="user-sum">{userPoints}</div>;
      }
    } else {
      return <div className="user-sum">{userPoints}</div>;
    }
  } else if (countUserCards === 3) {
    if((Deck[0].value2 === 11) || (Deck[1].value2 === 11) || (Deck[2].value2 === 11)) {
      if(userPoints+10 <= 21) {
      return <div className="user-sum user-sum-2">{userPoints} / {userPoints+10}</div>;
      } else {
        return <div className="user-sum user-sum-2">{userPoints}</div>;
      }
    } else {
      return <div className="user-sum user-sum-2">{userPoints}</div>;
    }
  } else if (countUserCards === 4) {
    if((Deck[0].value2 === 11) || (Deck[1].value2 === 11) || (Deck[2].value2 === 11) || (Deck[3].value2 === 11)) {
      if(userPoints+10 <= 21) {
      return <div className="user-sum user-sum-3">{userPoints} / {userPoints+10}</div>
      } else {
        return <div className="user-sum user-sum-3">{userPoints}</div>
      }
    } else {
      return <div className="user-sum user-sum-3">{userPoints}</div>
    }
   
  } else if (countUserCards === 5) {
    if((Deck[0].value2 === 11) || (Deck[1].value2 === 11) || (Deck[2].value2 === 11) || (Deck[3].value2 === 11) || (Deck[4].value2 === 11)) {
      if(userPoints+10 <= 21) {
        return <div className="user-sum user-sum-4">{userPoints} / {userPoints+10}</div>
      } else {
           return <div className="user-sum user-sum-4">{userPoints}</div>
      }
     
    } else {
    return <div className="user-sum user-sum-4">{userPoints}</div>
    }
  } else if (countUserCards === 6) {
    if((Deck[0].value2 === 11) || (Deck[1].value2 === 11) || (Deck[2].value2 === 11) || (Deck[3].value2 === 11) || (Deck[4].value2 === 11) || (Deck[5].value2 === 11)) {
      if(userPoints+10 <= 21) {
        return <div className="user-sum user-sum-5">{userPoints} / {userPoints+10}</div>
      } else {
        return <div className="user-sum user-sum-5">{userPoints}</div>
      }
      
    } else {
      return <div className="user-sum user-sum-5">{userPoints}</div>
    }
  
  } else if (countUserCards >= 7) {
    if((Deck[0].value2 === 11) || (Deck[1].value2 === 11) || (Deck[2].value2 === 11) || (Deck[3].value2 === 11) || (Deck[4].value2 === 11) || (Deck[5].value2 === 11) || (Deck[6].value2 === 11)) {
      if(userPoints+10 <= 21) {
        return <div className="user-sum user-sum-6">{userPoints} / {userPoints+10}</div>
      } else {
        return <div className="user-sum user-sum-6">{userPoints}</div>
      }
      
    } else {
      return <div className="user-sum user-sum-6">{userPoints}</div>
    }
  }
}

const renderDealerSum = () => {
  if(countDealerCards === 1) {
    if(Deck[Deck.length-1].value2 === 11) {
      return <div className="dealer-sum">{dealerPoints} / {dealerPoints+10}</div>
    } else {
      return <div className="dealer-sum">{dealerPoints}</div>
    } 

  } else if (countDealerCards === 2) {
    if (Deck[Deck.length-1].value2 === 11 || Deck[Deck.length-2].value2 === 11) {
      if(dealerPoints+10 === 21) {
        return <div className="dealer-sum dealer-sum-1">21</div>
      }
      else if(dealerPoints+10 <= 21) {
        return <div className="dealer-sum dealer-sum-1">{dealerPoints} / {dealerPoints+10}</div>
      } else {
        return <div className="dealer-sum dealer-sum-1">{dealerPoints}</div>
      }
    } else {
      return <div className="dealer-sum dealer-sum-1">{dealerPoints}</div>
    }
   
  } else if (countDealerCards === 3) {
    if(Deck[Deck.length-1].value2 === 11 || Deck[Deck.length-2].value2 === 11 || Deck[Deck.length-3].value2 === 11) {
      if(dealerPoints+10 <= 21) {
        return <div className="dealer-sum dealer-sum-2">{dealerPoints} / {dealerPoints+10}</div>;
      } else {
        return <div className="dealer-sum dealer-sum-2">{dealerPoints}</div>;
      }
    } else {
        return <div className="dealer-sum dealer-sum-2">{dealerPoints}</div>;
    }
  
  } else if (countDealerCards === 4) {
    if(Deck[Deck.length-1].value2 === 11 || Deck[Deck.length-2].value2 === 11 || Deck[Deck.length-3].value2 === 11 || Deck[Deck.length-4].value2 === 11) {
      if(dealerPoints+10 <= 21) {
        return <div className="dealer-sum dealer-sum-3">{dealerPoints} / {dealerPoints+10}</div>
      } else {
           return <div className="dealer-sum dealer-sum-3">{dealerPoints}</div>
      }
    } else {
          return <div className="dealer-sum dealer-sum-3">{dealerPoints}</div>
    }

  } else if (countDealerCards === 5) {
    if(Deck[Deck.length-1].value2 === 11 || Deck[Deck.length-2].value2 === 11 || Deck[Deck.length-3].value2 === 11 || Deck[Deck.length-4].value2 === 11 || Deck[Deck.length-5].value2 === 11) {
      if(dealerPoints+10 <= 21) {
        return <div className="dealer-sum dealer-sum-4">{dealerPoints} / {dealerPoints+10}</div>
      } else {
            return <div className="dealer-sum dealer-sum-4">{dealerPoints}</div>
      }
      
    } else {
      return <div className="dealer-sum dealer-sum-4">{dealerPoints}</div>
    }
  
  } else if (countDealerCards === 6) {
    if(Deck[Deck.length-1].value2 === 11 || Deck[Deck.length-2].value2 === 11 || Deck[Deck.length-3].value2 === 11 || Deck[Deck.length-4].value2 === 11 || Deck[Deck.length-5].value2 === 11 || Deck[Deck.length-6].value2 === 11) {
      if(dealerPoints+10 <= 21) {
        return <div className="dealer-sum dealer-sum-5">{dealerPoints} / {dealerPoints+10}</div>
      } else {
        return <div className="dealer-sum dealer-sum-5">{dealerPoints}</div>
      }
    } else {
       return <div className="dealer-sum dealer-sum-5">{dealerPoints}</div>
    }
   
  } else if (countDealerCards >= 7) {
    if(Deck[Deck.length-1].value2 === 11 || Deck[Deck.length-2].value2 === 11 || Deck[Deck.length-3].value2 === 11 || Deck[Deck.length-4].value2 === 11 || Deck[Deck.length-5].value2 === 11 || Deck[Deck.length-6].value2 === 11 || Deck[Deck.length-7].value2 === 11) {
      if(dealerPoints+10 <= 21) {
        return <div className="dealer-sum dealer-sum-6">{dealerPoints} / {dealerPoints+10}</div>
      } else {
        return <div className="dealer-sum dealer-sum-6">{dealerPoints}</div>
      }
    } else {
      
    return <div className="dealer-sum dealer-sum-6">{dealerPoints}</div>
    }
  }
  
}




const renderWonChip = () => {
  if (greenBetted) {
    return <div className="won-chip pokerchip won-chip-green">100</div>
  }
  else if (redBetted) {
    return <div className="won-chip pokerchip won-chip-red">200</div>
  }
  else if (blueBetted) {
    return <div className="won-chip pokerchip won-chip-blue">300</div>
  }
  else if (blackBetted) {
    return <div className="won-chip pokerchip won-chip-black">400</div>
  }
}

const renderBJChip = () => {
  if (greenBetted) {
    return <div className="bj-chip pokerchip bj-chip-purple">50</div>
  }
  else if (redBetted) {
    return <div className="bj-chip pokerchip bj-chip-green">100</div>
  }
  else if (blueBetted) {
    return <><div className="bj-chip pokerchip bj-chip-green-again">100</div><div className="bj-chip-3 pokerchip bj-chip-purple-again">50</div></>
  }
  else if (blackBetted) {
    return <div className="bj-chip pokerchip bj-chip-red">200</div>
  }
}


const resetGame = () => {
  // shuffleArray(Deck);
  // setCountDealerCards(0);
  // setCountUserCards(0);
  // setUserPoints(0);
  // setDealerPoints(0);
  // setGreenBetted(false);
  // setRedBetted(false);
  // setBlueBetted(false);
  // setBlackBetted(false);
  // SetShowWonChip(false);

  // setFirstUserCard(false);
  // setSecondUserCard(false);
  // setThirdUserCard(false);
  // setFourthUserCard(false);
  // setFifthUserCard(false);
  // setSixthUserCard(false);
  // setSeventhUserCard(false);

  // setFirstDealerCard(false);
  // setSecondDealerCard(false);
  // setThirdDealerCard(false);
  // setFourthDealerCard(false);
  // setFifthDealerCard(false);
  // setSixthDealerCard(false);
  // setSeventhDealerCard(false);

  // setHasUserWon(false);
  // setBlackJack(false);

  // setShowBJChip(false);


  // setDisableHit(false);
  // setDisableStand(false);
  // setBust(false);
  // setDealerWins(false);
  // setStandOff(false);
  
}



const checkForBlackJack = () => {
  if(Deck[0].value === 1 && Deck[1].value === 10) {
    setDisableHit(true);
    setDisableStand(true);
    setTimeout(() => {
        setBlackJack(true);
        SetShowWonChip(true);
        setShowBJChip(true);
    }, 1000)

      setTimeout(() => {
        resetGame();
    }, 3000)
  }

  else if (Deck[0].value === 10 && Deck[1].value === 1) {
      setDisableHit(true);
      setDisableStand(true);
    setTimeout(() => {
          setBlackJack(true);
          SetShowWonChip(true);
         setShowBJChip(true);
    }, 1000)

     setTimeout(() => {
       resetGame();
   }, 3000)
  }
  else {
   return
  }

  
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }


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
      {dealerWins && <div className="dealer-wins-text">Dealer Wins!</div>}
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
      {isBlackJack && <p className="bj-text">Black Jack!</p>}
      {isBust && <p className="bust-text">Bust!</p>}
      {standOff && <p className="bust-text">Stand off!</p>}
      {renderUserSum()}
      <p className= {greenBetted || redBetted || blueBetted || blackBetted ? "place-bet-text hidden": "place-bet-text"}>Place Your Bet</p>
      <div className={greenBetted || redBetted || blueBetted || blackBetted ? 'user-box' : 'user-box hidden'}>
      <button className='stand-btn' onClick={()=> drawDealerCards()}>Stand</button>
      <button className='hit-btn' onClick={() => drawUserCards()}>Hit</button>
    </div>
   {showWonChip && renderWonChip()}
   {showBJChip && renderBJChip()}
    <div className={greenBetted || redBetted || blueBetted || blackBetted ? 'betting-box hide-chips': 'betting-box'}>
            <MdArrowDropDown className="arrow-1"/>
            <MdArrowDropDown className="arrow-2"/>
            <MdArrowDropDown className="arrow-3"/>
            <MdArrowDropDown className="arrow-4"/>
        <div className="chips">
            
            <div class={greenBetted ? "pokerchip betted-chip greenchip" : "pokerchip greenchip none-transition"} id={isBust || dealerWins ? 'lose-chip' : ''} onClick={() => betGreenChip()}>100</div>
            <div class={redBetted? "pokerchip betted-chip redchip" : "pokerchip redchip none-transition"}  id={isBust || dealerWins ? 'lose-chip' : ''} onClick={() => betRedChip()}>200</div>
            <div class={blueBetted? "pokerchip betted-chip bluechip" : "pokerchip bluechip none-transition"} id={isBust || dealerWins ? 'lose-chip' : ''} onClick={() => betBlueChip()}>300</div>
            <div class={blackBetted? "pokerchip betted-chip blackchip" : "pokerchip blackchip none-transition"} id={isBust || dealerWins ? 'lose-chip' : ''} onClick={() => betBlackChip()}>400</div>
        </div>
    </div>

    </div>
  );
};

export default GameTable;
