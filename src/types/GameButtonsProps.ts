import { CurrentPlayerIndex } from "./currentPlayerIndex";
import { PlayerScoreType } from "./PlayerScoreType";

export type GameButtonsProps = {
  currentPlayer: number;
  playersScore: PlayerScoreType[];
  setPlayersScore: React.Dispatch<React.SetStateAction<PlayerScoreType[]>>;
  changePlayer: React.Dispatch<React.SetStateAction<CurrentPlayerIndex>>;
};
