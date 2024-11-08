import { GameSettings } from "./GameSettings";

export type GameSettingsComponent = {
  setGameSettings: React.Dispatch<React.SetStateAction<GameSettings>>;
};
