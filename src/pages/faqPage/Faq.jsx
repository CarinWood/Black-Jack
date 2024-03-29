import React from "react";
import "./faq.css";

const Faq = () => {
  return (
    <div className="faq-page">
      <p className="faq-heading">How to Play</p>
      <p className="faq-text">
        The goal of Black Jack is to beat the dealer. The Player wins if their
        hand has a higher value than the Dealer without going Bust. The Player
        also wins if the Dealer goes Bust but the Player does not.
      </p>
      <p className="faq-text">
        To begin, you are dealt two cards. The Dealer is dealt one card.
      </p>
      <h1 className="text-heading">Hit</h1>
      <p className="faq-text">
        Press
        <span className="btn-span">
          <button className="demo-hit-btn">Hit</button>
        </span>
        if you would like a new card. The Player can take as many cards as they
        like until they press Stand or go Bust.
      </p>
      <p className="faq-text">
        If the value of a hand goes over 21 the hand is Bust. Players
        automatically lose if they go Bust, even if the Dealer does too.
      </p>
      <h1 className="text-heading">Stand</h1>
      <p className="faq-text">
        If you feel like you are close to going Bust you can press
        <span className="btn-span">
          <button className="demo-stand-btn">Stand</button>
        </span>
        The Dealer will either continue to hit or Stand themselves, at which
        point cards are shown.
      </p>
      <h1 className="text-heading">Card Values</h1>
      <p className="faq-text">
        Twos through Nines are counted at face value i.e. Two of Hearts is worth
        two points.
      </p>
      <p className="faq-text">
        Tens, Jacks, Queens, and Kings are valued at 10 each
      </p>
      <p className="faq-text">
        Aces can be either one or 11 e.g. if you are dealt an Ace and a Nine
        your score can be either 10 or 20
      </p>
      <h1 className="text-heading">Stand Off</h1>
      Stand off means the hand is a draw. The Player keeps his bet, neither
      winning nor losing money.
      <p className="faq-text"></p>
      <h1 className="text-heading">Black Jack</h1>
      <p className="faq-text">
        The most valuable hand to be dealt is an Ace and any card with a value
        of 10. This is called a Black Jack. A Player who is dealt a Black Jack
        automatically wins.
      </p>
      <h1 className="text-heading">Winning and Losing</h1>
      <p className="faq-text">
        You start the game with $1000. If you lose all your money you get Game
        Over.
      </p>
      <p className="faq-text">
        If you win, you keep your bet and you receive an equal number of chips
        from the Dealer.
      </p>
      <p className="faq-text end-text">
        If you win with a Black Jack, you keep your bet and you receive 3 chips
        for every 2 chips you bet.
      </p>
      <footer>
        <p className="footer-text">
          &copy;2023 <span className="name-span">Carin Wood</span>
        </p>
      </footer>
    </div>
  );
};

export default Faq;
