import "./GameSettings.css";

export default function GameSettings() {
  function handleStartGameBtnClick() {}

  return (
    <div className="game-settings">
      <h3>Choose Max Score:</h3>
      <input
        type="text"
        name="max-score"
        id="max-score"
        placeholder="Enter max score"
      />
      <button onClick={handleStartGameBtnClick} className="start-game-btn">
        Start Game!
      </button>
    </div>
  );
}
