import "./GameButtons.css";
import { useGameContext } from "../../Providers/GameProvider";

// types
import type { GameButtonsProps } from "../../types/GameButtonsProps";

export default function GameButtons({
  currentPlayer,
  setPlayersScore,
  changePlayer,
}: GameButtonsProps) {
  const { useDices, useGameSettings, resetGame, isThereAWinner } =
    useGameContext();
  const [dices, setDices] = useDices();
  const [gameSettings] = useGameSettings();
  const maxScore = +gameSettings.maxScore!;

  function RollDiceHandleClick() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    setDices({
      diceOne: randomNumber1,
      diceTwo: randomNumber2,
    });

    setPlayersScore((prev) => {
      const playersScore = [...prev];
      playersScore[currentPlayer - 1].currentScore =
        randomNumber1 === randomNumber2
          ? 0
          : playersScore[currentPlayer - 1].currentScore +
            randomNumber1 +
            randomNumber2;

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
      playersScore[currentPlayer - 1].isWinner =
        playersScore[currentPlayer - 1].score >= maxScore;

      return playersScore;
    });

    changePlayer(currentPlayer === 1 ? 2 : 1);
  }

  return (
    <div className="game-buttons">
      <button
        style={{
          backgroundColor: isThereAWinner ? "var(--primary-color)" : "",
          color: isThereAWinner ? "white" : "",
        }}
        onClick={resetGame}
      >
        New Game
      </button>
      <img src={`images/dice-${dices.diceOne}.png`} alt="dice-image" />
      <img src={`images/dice-${dices.diceTwo}.png`} alt="dice-image" />

      <button disabled={isThereAWinner} onClick={RollDiceHandleClick}>
        Roll Dice
      </button>
      <button disabled={isThereAWinner} onClick={HoldBtnHandleClick}>
        Hold
      </button>
    </div>
  );
}
