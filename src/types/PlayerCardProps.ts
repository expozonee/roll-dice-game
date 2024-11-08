import { PlayerScoreType } from "./PlayerScoreType";

export type PlayerCardProps = {
  title: string;
  playerScore: PlayerScoreType;
  isCurrentPlayer: boolean;
  isThereAWinner: boolean;
};
