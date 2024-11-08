import "./PlayerCardHeader.css";

// types
import type { PlayerCardHeaderProps } from "../../types/PlayerCardHeaderProps";
import { useGameContext } from "../../Providers/GameProvider";

export default function PlayerCardHeader({
  title,
  score,
  isWinner,
}: PlayerCardHeaderProps) {
  const { useGameSettings } = useGameContext();
  const [gameSettings] = useGameSettings();

  return (
    <div className="p-header">
      <p className="max-score">The max score is: {+gameSettings.maxScore!}</p>
      <h2 className="player-title">{title}</h2>
      {isWinner && <h3 className="winner-text">is the winner!!!</h3>}
      <h2 className="player-score">{score ? score : 0}</h2>
    </div>
  );
}
