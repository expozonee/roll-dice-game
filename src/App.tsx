import "./App.css";
import GameDashboard from "./components/GameDashboard/GameDashboard";
import GameSettingsAndRules from "./components/GameSettingsAndRules/GameSettingsAndRules";
import { useGameContext } from "./Providers/GameProvider";

function App() {
  const { useGameSettings } = useGameContext();
  const [gameSettings] = useGameSettings();

  if (!gameSettings.isGameStarted) {
    return (
      <article>
        <GameSettingsAndRules />
      </article>
    );
  }

  return (
    <article>
      <GameDashboard />
    </article>
  );
}

export default App;
