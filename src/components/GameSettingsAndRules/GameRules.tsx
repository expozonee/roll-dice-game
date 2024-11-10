import "./GameRules.css";

export default function GameRules() {
  return (
    <div className="game-rules">
      <h3>Game Rules</h3>
      <ul>
        <li>Set your max score on the first page to start the game.</li>
        <li>
          Players take turns clicking the "Roll Dice" button. Each player gets 5
          rolls per turn.
        </li>
        <li>
          Add the total of the dice to your current score. If both dice show the
          same number, your current score resets to 0.
        </li>
        <li>
          Press "Hold" to keep your score and end your turn. The turn will pass
          to the other player.
        </li>
        <li>The first player to reach the max score wins the game.</li>
      </ul>
    </div>
  );
}
