import "./GameDashboard.css";
import PlayerCard from "../PlayerCard/PlayerCard";
import GameButtons from "../GameButtons/GameButtons";
import { useGameContext } from "../../Providers/GameProvider";
import playersData from "../../data/players.json";

export default function GameDashboard() {
  const { useCurrentPlayer, usePlayersScore, useGameSettings } =
    useGameContext();
  const [currentPlayer, setCurrentPlayer] = useCurrentPlayer();
  const [playersScore, setPlayersScore] = usePlayersScore();
  const [gameSettings] = useGameSettings();

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
