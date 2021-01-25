import { IPreset, TColors, TNumbers, TTile, TVoid } from "./windowEditor.types";

export const colors: Record<TColors | TVoid, string> = {
  0: "Empty",
  r: "Red",
  g: "Green",
  b: "Blue",
  y: "Yellow",
  p: "Purple",
};

export const numbers: Record<TNumbers, string> = {
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
};

export const emptyTile: TTile[] = new Array(20).fill("0");

export const presets: IPreset[] = [
  { tiles: "1py04py006y005305421", difficulty: 6, name: "Sun's Glory" },
  { tiles: "05g005b10620bpgp0361", difficulty: 6, name: "Shadom" },
  { tiles: "100y000y500y006y302g", difficulty: 3, name: "Sol" },
  { tiles: "00r00yr4bp10p023y6r5", difficulty: 6, name: "Baroque" },
  { tiles: "000r500p4b0b3y6y2g1r", difficulty: 5, name: "Ripples of Light" },
  { tiles: "0br000450bb20r56r310", difficulty: 5, name: "Fulgor del Cielo" },
  { tiles: "y0600015023yrp00043r", difficulty: 4, name: "Via Lux" },
];

export const isValidCombination = (combination: string) => {
  if (!combination || combination.length !== 20) {
    return false;
  }

  return combination
    .split("")
    .every(
      (tile) =>
        Object.keys(colors).includes(tile) ||
        Object.keys(numbers).includes(tile)
    );
};

export const printDifficulty = (difficulty: number) => {
  if (!difficulty) {
    return "";
  }
  return new Array(difficulty).fill("•").join("");
};
