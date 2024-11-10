import "./App.css";
import GameDashboard from "./components/GameDashboard/GameDashboard";
import GameSettingsAndRules from "./components/GameSettingsAndRules/GameSettingsAndRules";
import { useGameContext } from "./Providers/GameProvider";

function App() {
  const { useGameSettings } = useGameContext();
  const [gameSettings] = useGameSettings();

  return (
    <article>
      {gameSettings.isGameStarted ? (
        <GameDashboard />
      ) : (
        <GameSettingsAndRules />
      )}
    </article>
  );
}

export default App;
