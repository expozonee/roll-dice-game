/* eslint-disable react-refresh/only-export-components */

import { createContext, ReactNode, useContext, useState } from "react";

// types
import type { CurrentPlayerIndex } from "../types/currentPlayerIndex";
import type { PlayerScoreType } from "../types/PlayerScoreType";
import { Dice } from "../types/Dice";
import { GameSettings } from "../types/GameSettings";

type GameProviderProps = {
  children: ReactNode;
};

type GameContext = {
  isThereAWinner: boolean;
  useCurrentPlayer: () => [
    CurrentPlayerIndex,
    React.Dispatch<React.SetStateAction<CurrentPlayerIndex>>
  ];
  usePlayersScore: () => [
    PlayerScoreType[],
    React.Dispatch<React.SetStateAction<PlayerScoreType[]>>
  ];
  useDices: () => [Dice, React.Dispatch<React.SetStateAction<Dice>>];
  useGameSettings: () => [
    GameSettings,
    React.Dispatch<React.SetStateAction<GameSettings>>
  ];
  resetGame: () => void;
};

const GameContext = createContext<GameContext | null>(null);

export default function GameProvider({ children }: GameProviderProps) {
  const [currentPlayer, setCurrentPlayer] = useState<CurrentPlayerIndex>(1);
  const [gameSettings, setGameSettings] = useState<GameSettings>({
    isGameStarted: false,
    maxScore: null,
  });
  const [playersScore, setPlayersScore] = useState<PlayerScoreType[]>([
    {
      playerId: 1,
      score: 0,
      currentScore: 0,
      isWinner: false,
    },
    {
      playerId: 2,
      score: 0,
      currentScore: 0,
      isWinner: false,
    },
  ]);
  const [dices, setDices] = useState<Dice>({
    diceOne: 1,
    diceTwo: 2,
  });

  const isThereAWinner = playersScore.some(
    (playerScore) => playerScore.isWinner
  );

  function useCurrentPlayer() {
    return [currentPlayer, setCurrentPlayer] as [
      CurrentPlayerIndex,
      React.Dispatch<React.SetStateAction<CurrentPlayerIndex>>
    ];
  }

  function usePlayersScore() {
    return [playersScore, setPlayersScore] as [
      PlayerScoreType[],
      React.Dispatch<React.SetStateAction<PlayerScoreType[]>>
    ];
  }

  function useDices() {
    return [dices, setDices] as [
      Dice,
      React.Dispatch<React.SetStateAction<Dice>>
    ];
  }

  function useGameSettings() {
    return [gameSettings, setGameSettings] as [
      GameSettings,
      React.Dispatch<React.SetStateAction<GameSettings>>
    ];
  }

  function resetGame() {
    setCurrentPlayer(1);
    setPlayersScore([
      {
        playerId: 1,
        score: 0,
        currentScore: 0,
        isWinner: false,
      },
      {
        playerId: 2,
        score: 0,
        currentScore: 0,
        isWinner: false,
      },
    ]);
    setDices({
      diceOne: 1,
      diceTwo: 2,
    });
    setGameSettings({
      isGameStarted: false,
      maxScore: null,
    });
  }

  return (
    <GameContext.Provider
      value={{
        isThereAWinner,
        useCurrentPlayer,
        usePlayersScore,
        useDices,
        useGameSettings,
        resetGame,
      }}
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
