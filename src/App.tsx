import "./App.css";
import GameDashboard from "./components/GameDashboard/GameDashboard";
import GameProvider from "./Providers/GameProvider";

function App() {
  return (
    <article>
      <GameProvider>
        <GameDashboard />
      </GameProvider>
    </article>
  );
}

export default App;
