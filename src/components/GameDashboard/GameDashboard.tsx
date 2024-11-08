import "./GameDashboard.css";
import { useState } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";
import GameButtons from "../GameButtons/GameButtons";

// types
import type { PlayerScoreType } from "../../types/PlayerScoreType";
import type { CurrentPlayerIndex } from "../../types/currentPlayerIndex";

const playersData = [
  {
    id: 1,
    name: "Player 1",
  },
  {
    id: 2,
    name: "Player 2",
  },
];

export default function GameDashboard() {
  const [playersScore, setPlayersScore] = useState<PlayerScoreType[]>([
    {
      playerId: 1,
      score: 0,
      currentScore: 0,
    },
    {
      playerId: 2,
      score: 0,
      currentScore: 0,
    },
  ]);
  const [currentPlayer, setCurrentPlayer] = useState<CurrentPlayerIndex>(1);

  return (
    <section>
      <GameButtons
        currentPlayer={currentPlayer}
        setPlayersScore={setPlayersScore}
        changePlayer={setCurrentPlayer}
      />
      {playersData.map((data, index) => {
        return (
          <PlayerCard
            key={data.id}
            title={data.name}
            playersScore={playersScore[index]}
            isCurrentPlayer={currentPlayer === index + 1}
          />
        );
      })}
    </section>
  );
}
