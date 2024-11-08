/* eslint-disable react-refresh/only-export-components */

import { createContext, ReactNode, useContext, useState } from "react";

// types
import type { CurrentPlayerIndex } from "../types/currentPlayerIndex";
import type { PlayerScoreType } from "../types/PlayerScoreType";
import { Dice } from "../types/Dice";

type GameProviderProps = {
  children: ReactNode;
};

type GameContext = {
  useCurrentPlayer: () => [
    CurrentPlayerIndex,
    React.Dispatch<React.SetStateAction<CurrentPlayerIndex>>
  ];
  usePlayersScore: () => [
    PlayerScoreType[],
    React.Dispatch<React.SetStateAction<PlayerScoreType[]>>
  ];
  useDices: () => [Dice, React.Dispatch<React.SetStateAction<Dice>>];
};

const GameContext = createContext<GameContext | null>(null);

export default function GameProvider({ children }: GameProviderProps) {
  function useCurrentPlayer() {
    const [currentPlayer, setCurrentPlayer] = useState<CurrentPlayerIndex>(1);
    return [currentPlayer, setCurrentPlayer] as [
      CurrentPlayerIndex,
      React.Dispatch<React.SetStateAction<CurrentPlayerIndex>>
    ];
  }

  function usePlayersScore() {
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
    return [playersScore, setPlayersScore] as [
      PlayerScoreType[],
      React.Dispatch<React.SetStateAction<PlayerScoreType[]>>
    ];
  }

  function useDices() {
    const [dices, setDices] = useState<Dice>({
      diceOne: 1,
      diceTwo: 2,
    });

    return [dices, setDices] as [
      Dice,
      React.Dispatch<React.SetStateAction<Dice>>
    ];
  }

  return (
    <GameContext.Provider
      value={{ useCurrentPlayer, usePlayersScore, useDices }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext() {
  const context = useContext(GameContext);
  if (context === null) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
}
