import React from "react";
import './gameTable.css'
import UserButtons from "../../components/userButtons/UserButtons";
import Card02 from "../../components/card02/Card02";

const GameTable = () => {
  return (
    <div className="game-table">
      <div className="dealers-box">
        <Card02 suit={"spades"}/>
      </div>

      <UserButtons />
    </div>
  );
};

export default GameTable;
