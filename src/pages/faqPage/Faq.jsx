import React from "react";
import "./faq.css";


const Faq = () => {
  return (
    <div className="faq-page">
      <p className="faq-heading">How to Play</p>
      <p className="faq-text">
        The goal of Black Jack is to beat the dealer. The Player wins if their
        hand has a higher value than the Dealer without going Bust. The Player
        also wins if the Dealer Busts but the Player doesn't.
      </p>

      <p className="faq-text">
        To begin, you are dealt two cards. The Dealer's last card is dealt face
        up for the Player to see.
      </p>

      <p className="faq-text">
        Press
        <span className="btn-span">
          <button className="demo-hit-btn">Hit</button>
        </span>
        if you would like a new card. The Player can take as many cards as they
        Stand or go Bust.
      </p>

      <p className="faq-text">
        If the value of a hand goes over 21 the hand is Bust. Players
        automatically lose if they Bust, even if the Dealer does too.
      </p>

      <p className="faq-text">
        If you feel like you are close to going Bust you can press
        <span className="btn-span">
          <button className="demo-stand-btn">Stand</button>
        </span>
        The Dealer will either continue to hit or Stand themselves, at which
        point cards are shown.
      </p>

      <p className="faq-text">
        Twos through Nines are counted at face value i.e. Three of Clubs i worth
        three points.
      </p>

      <p className="faq-text">
        Tens, Jacks, Queens, and Kings are valued at 10 each
      </p>

      <p className="faq-text">
        Aces can be either one or 11 e.g. if you're dealt an ace and a nine your
        score can be either 10 or 20
      </p>

      <p className="faq-text">
        The most powerful hand to be dealt is an Ace and any card with a value
        of 10. This is called a Black Jack. A Player who is dealt a Black Jack
        automatically wins unless both the Player and a the Dealer have Black
        Jack. If so, it is a Stand Off between the Player and the Dealer.
      </p>
      <p className="faq-text">
        If you win, your bet is returned to you and you receive an equal number
        of chips from the Dealer.
      </p>
      <p className="faq-text end-text">
        If your win with a Black Jack, your bet is returned to you, and you
        receive 3 chips for every 2 chips you bet.
      </p>

      <footer>
      <p className="footer-text">&copy;2023 <span className="name-span"><a href="" target="_blank">Carin Wood</a></span></p>
      </footer>
    </div>
  );
};

export default Faq;
