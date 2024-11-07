import PLayerScore from "./PLayerScore";
import PlayerHeader from "./PlayerHeader";
import "./PlayerCard.css";

export default function PlayerCard() {
  return (
    <div className="card">
      <PlayerHeader />
      <PLayerScore />
    </div>
  );
}
