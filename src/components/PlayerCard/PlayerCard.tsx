import PlayerScore from "./PlayerScore";
import PlayerHeader from "./PlayerHeader";
import "./PlayerCard.css";

type PlayerCardProps = {
  title: string;
  playersScore: {
    playerId: number;
    score: number;
    currentScore: number;
  };
  isCurrentPlayer: boolean;
};

export default function PlayerCard({
  title,
  isCurrentPlayer,
  playersScore,
}: PlayerCardProps) {
  console.log("rerender");

  return (
    <div
      style={{ backgroundColor: isCurrentPlayer ? "rgba(0,0,0,0.3)" : "" }}
      className="card"
    >
      <PlayerHeader title={title} score={playersScore.score} />
      <PlayerScore score={playersScore.currentScore} />
    </div>
  );
}
