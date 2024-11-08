import "./GameDashboard.css";
import PlayerCard from "../PlayerCard/PlayerCard";
import GameButtons from "../GameButtons/GameButtons";
import { useGameContext } from "../../Providers/GameProvider";

const playersData = [
  {
    id: 1,
    name: "Player 1",
  },
  {
    id: 2,
    name: "Player 2",
  },
];

export default function GameDashboard() {
  const { useCurrentPlayer, usePlayersScore, useGameSettings } =
    useGameContext();
  const [currentPlayer, setCurrentPlayer] = useCurrentPlayer();
  const [playersScore, setPlayersScore] = usePlayersScore();
  const [gameSettings] = useGameSettings();

  const isThereAWinner = playersScore.some(
    (playerScore) => playerScore.isWinner
  );

  return (
    <section className="game-dashboard">
      <p className="max-score">The max score is: {+gameSettings.maxScore!}</p>

      {playersData.map((data, index) => {
        return (
          <PlayerCard
            key={data.id}
            title={data.name}
            playerScore={playersScore[index]}
            isCurrentPlayer={currentPlayer === index + 1}
            isThereAWinner={isThereAWinner}
          />
        );
      })}
      <GameButtons
        currentPlayer={currentPlayer}
        setPlayersScore={setPlayersScore}
        changePlayer={setCurrentPlayer}
        playersScore={playersScore}
      />
    </section>
  );
}
