import { useGameContext } from "../../Providers/GameProvider";
import GameRules from "./GameRules";
import GameSettings from "./GameSettings";
import "./GameSettingsAndRules.css";

export default function GameSettingsAndRules() {
  const { useGameSettings } = useGameContext();
  const [gameSettings, setGameSettings] = useGameSettings();

  if (gameSettings.isGameStarted) {
    return null;
  }

  return (
    <div className="game-rules-settings">
      <h1>Welcome to Game dice game!</h1>
      <GameRules />
      <GameSettings setGameSettings={setGameSettings} />
    </div>
  );
}
