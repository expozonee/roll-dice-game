import "./GameButtons.css";
import { useState } from "react";

// types
import type { GameButtonsProps } from "../../types/GameButtonsProps";

export default function GameButtons({
  currentPlayer,
  setPlayersScore,
  changePlayer,
}: GameButtonsProps) {
  const [dices, setDices] = useState({
    diceOne: 1,
    diceTwo: 2,
  });

  function RollDiceHandleClick() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    setDices({
      diceOne: randomNumber1,
      diceTwo: randomNumber2,
    });

    setPlayersScore((prev) => {
      const playersScore = [...prev];
      playersScore[currentPlayer - 1].currentScore +=
        randomNumber1 + randomNumber2;

      return playersScore;
    });
  }

  function HoldBtnHandleClick() {
    setPlayersScore((prev) => {
      const playersScore = [...prev];
      playersScore[currentPlayer - 1].score =
        playersScore[currentPlayer - 1].score +
        playersScore[currentPlayer - 1].currentScore;
      playersScore[currentPlayer - 1].currentScore = 0;
      return playersScore;
    });

    changePlayer(currentPlayer === 1 ? 2 : 1);
  }

  return (
    <div className="game-buttons">
      <button>New Game</button>
      <img src={`images/dice-${dices.diceOne}.png`} alt="dice-image" />
      <img src={`images/dice-${dices.diceTwo}.png`} alt="dice-image" />

      <button onClick={RollDiceHandleClick}>Roll Dice</button>
      <button onClick={HoldBtnHandleClick}>Hold</button>
    </div>
  );
}
