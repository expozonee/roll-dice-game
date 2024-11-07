import "./PlayerScore.css";

type PlayerScoreProps = {
  score: number;
};

export default function PlayerScore({ score }: PlayerScoreProps) {
  return (
    <div className="current-score">
      <h3>Current Score</h3>
      <p>{score}</p>
    </div>
  );
}
