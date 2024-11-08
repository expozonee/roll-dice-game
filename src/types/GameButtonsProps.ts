import { CurrentPlayerIndex } from "./currentPlayerIndex";
import { PlayerScoreType } from "./PlayerScoreType";

export type GameButtonsProps = {
  currentPlayer: number;
  setPlayersScore: React.Dispatch<React.SetStateAction<PlayerScoreType[]>>;
  changePlayer: React.Dispatch<React.SetStateAction<CurrentPlayerIndex>>;
};
