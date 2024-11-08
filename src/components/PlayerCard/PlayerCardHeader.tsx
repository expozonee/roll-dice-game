import "./PlayerCardHeader.css";

// types
import type { PlayerCardHeaderProps } from "../../types/PlayerCardHeaderProps";

export default function PlayerCardHeader({
  title,
  score,
  isWinner,
}: PlayerCardHeaderProps) {
  return (
    <div className="p-header">
      <h2 className="player-title">{title}</h2>
      {isWinner && <h3 className="winner-text">is the winner!!!</h3>}
      <h2 className="player-score">{score ? score : 0}</h2>
    </div>
  );
}
