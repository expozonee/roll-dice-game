import PlayerScore from "./PlayerCurrentScore";
import PlayerCardHeader from "./PlayerCardHeader";
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
  console.log("re render");

  return (
    <div
      style={{ backgroundColor: isCurrentPlayer ? "rgba(0,0,0,0.3)" : "" }}
      className={`card ${isCurrentPlayer ? "active" : ""}`}
    >
      <PlayerCardHeader title={title} score={playersScore.score} />
      <PlayerScore score={playersScore.currentScore} />
    </div>
  );
}
