import "./PlayerHeader.css";

type PlayerHeaderProps = {
  title: string;
  score: number;
};

export default function PlayerHeader({ title, score }: PlayerHeaderProps) {
  return (
    <div className="p-header">
      <h2 className="player-title">{title}</h2>
      <h2 className="player-score">{score ? score : 0}</h2>
    </div>
  );
}
