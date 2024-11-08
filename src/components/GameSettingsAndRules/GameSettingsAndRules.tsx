import GameRules from "./GameRules";
import GameSettings from "./GameSettings";
import "./GameSettingsAndRules.css";

export default function GameSettingsAndRules() {
  return (
    <div className="game-rules-settings">
      <GameRules />
      <GameSettings />
    </div>
  );
}
