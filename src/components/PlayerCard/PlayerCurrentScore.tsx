import "./PlayerCurrentScore.css";

// types
import type { PlayerCurrentScoreProps } from "../../types/PlayerCurrentScoreProps";

export default function PlayerCurrentScore({ score }: PlayerCurrentScoreProps) {
  return (
    <div className="current-score">
      <h3>Current Score</h3>
      <p>{score}</p>
    </div>
  );
}
