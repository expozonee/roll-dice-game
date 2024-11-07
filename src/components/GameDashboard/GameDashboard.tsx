import { useState } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";
import "./GameDashboard.css";
import GameButtons from "../GameButtons/GameButtons";

export type PlayerScoreType = {
  playerId: number;
  score: number;
  currentScore: number;
};

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

export type currentPlayerIndex = 1 | 2;

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
  const [currentPlayer, setCurrentPlayer] = useState<currentPlayerIndex>(1);

  // console.log(playersScore);

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
