import "./PlayerCard.css";
import PlayerScore from "./PlayerCurrentScore";
import PlayerCardHeader from "./PlayerCardHeader";
import { useGameContext } from "../../Providers/GameProvider";

// types
import type { PlayerCardProps } from "../../types/PlayerCardProps";

export default function PlayerCard({
  title,
  isCurrentPlayer,
  playerScore,
}: PlayerCardProps) {
  const { isThereAWinner } = useGameContext();

  return (
    <div
      style={{
        backgroundColor: isCurrentPlayer ? "rgba(0,0,0,0.3)" : "",
      }}
      className={`card ${!isThereAWinner && isCurrentPlayer ? "active" : ""} ${
        isThereAWinner ? (playerScore.isWinner ? "winner" : "lost") : ""
      }`}
    >
      <PlayerCardHeader
        isWinner={playerScore.isWinner}
        title={title}
        score={playerScore.score}
      />
      <PlayerScore score={playerScore.currentScore} />
    </div>
  );
}
