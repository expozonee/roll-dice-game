import { useState } from "react";
import "./GameButtons.css";
import {
  currentPlayerIndex,
  PlayerScoreType,
} from "../GameDashboard/GameDashboard";

type GameButtonsProps = {
  currentPlayer: number;
  setPlayersScore: React.Dispatch<React.SetStateAction<PlayerScoreType[]>>;
  changePlayer: React.Dispatch<React.SetStateAction<currentPlayerIndex>>;
};

export default function GameButtons({
  currentPlayer,
  setPlayersScore,
  changePlayer,
}: GameButtonsProps) {
  const [diceOne, setDiceOne] = useState<number | undefined>(1);
  const [diceTwo, setDiceTwo] = useState<number | undefined>(2);

  return (
    <div className="game-buttons">
      <button>New Game</button>
      <img src={`images/dice-${diceOne}.png`} alt="dice-image" />
      <img src={`images/dice-${diceTwo}.png`} alt="dice-image" />

      <button
        onClick={() => {
          const randomNumber1 = Math.floor(Math.random() * 6) + 1;
          const randomNumber2 = Math.floor(Math.random() * 6) + 1;
          setDiceOne(randomNumber1);
          setDiceTwo(randomNumber2);
          setPlayersScore((prev) => {
            const playersScore = [...prev];
            console.log(`Before Update: ${JSON.stringify(playersScore)}`);
            playersScore[currentPlayer - 1].currentScore +=
              randomNumber1 + randomNumber2;
            console.log(`After Update: ${JSON.stringify(playersScore)}`);

            return playersScore;
          });
        }}
      >
        Roll Dice
      </button>
      <button
        onClick={() => {
          setPlayersScore((prev) => {
            const playersScore = [...prev];
            playersScore[currentPlayer - 1].score =
              playersScore[currentPlayer - 1].score +
              playersScore[currentPlayer - 1].currentScore;
            playersScore[currentPlayer - 1].currentScore = 0;
            return playersScore;
          });
          changePlayer(currentPlayer === 1 ? 2 : 1);
        }}
      >
        Hold
      </button>
    </div>
  );
}
