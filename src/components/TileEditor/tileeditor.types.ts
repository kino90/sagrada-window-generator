export type TNumbers = "1" | "2" | "3" | "4" | "5" | "6";
export type TColors = "r" | "g" | "b" | "y" | "p";
export type TVoid = "0";
export type TTile = TNumbers | TColors | TVoid;

export interface IPreset {
  name: string;
  difficulty: number;
  tiles: string;
}
