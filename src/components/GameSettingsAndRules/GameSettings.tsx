import { BaseSyntheticEvent } from "react";
import { GameSettingsComponent } from "../../types/GameSettingsComponent";
import "./GameSettings.css";

export default function GameSettings({
  setGameSettings,
}: GameSettingsComponent) {
  function handleSubmit(e: BaseSyntheticEvent) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const maxScore = formData.get("max-score");

    setGameSettings({
      isGameStarted: true,
      maxScore: maxScore,
    });
  }

  return (
    <div className="game-settings">
      <h3>Choose Max Score:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="max-score"
          id="max-score"
          placeholder="Enter max score"
        />
        <button type="submit" className="start-game-btn">
          Start Game!
        </button>
      </form>
    </div>
  );
}
