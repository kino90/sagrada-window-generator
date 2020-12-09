import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { TColors, TNumbers, TTile, TVoid } from "./tileeditor.types";
import {
  colors,
  numbers,
  presets,
  emptyTile,
  isValidCombination,
} from "./TileEditor.utils";
import Tiles from "./Tiles";

interface IParams {
  currentCombination: string;
  difficulty: string;
  name: string;
}

const TileEditor: React.FC = () => {
  const { currentCombination, difficulty, name } = useParams<IParams>();
  const history = useHistory();
  const [tiles, setTiles] = useState<TTile[]>(
    currentCombination && isValidCombination(currentCombination)
      ? (currentCombination.split("") as TTile[])
      : emptyTile
  );
  const [selectedTile, setSelectedTile] = useState<TTile>("0");
  const [tileDifficulty, setTileDifficulty] = useState<number>(
    Number(difficulty) ?? 3
  );
  const [tileName, setTileName] = useState<string>(name ? decodeURI(name) : "");

  useEffect(() => {
    let url = `/${tiles.join("")}`;

    if (tileDifficulty) {
      url += `/${tileDifficulty}`;
    }

    if (tileName) {
      url += `/${encodeURIComponent(tileName)}`;
    }

    history.replace(url);
  }, [history, tiles, tileName, tileDifficulty]);

  useEffect(() => {
    if (
      currentCombination &&
      isValidCombination(currentCombination) &&
      currentCombination !== tiles.join("")
    ) {
      setTiles(currentCombination.split("") as TTile[]);
    }

    if (difficulty) {
      setTileDifficulty(Number(difficulty));
    }

    if (name) {
      setTileName(decodeURIComponent(name));
    }
  }, [currentCombination, difficulty, name]);

  const selectTile = (selectedTile: string) => () => {
    if (selectedTile) {
      setSelectedTile(selectedTile as TTile);
    }
  };

  const setTileHandler = (id: number) => {
    if (id || id === 0) {
      setTiles((tiles: TTile[]) => {
        const newTiles = [...tiles];
        newTiles[id] = selectedTile;
        return newTiles;
      });
    }
  };

  const difficultyChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setTileDifficulty(Number(e.target.value));
    }
  };

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== undefined) {
      setTileName(e.target.value);
    }
  };

  return (
    <div>
      <div>
        {Object.entries(colors).map(([k, v]) => (
          <button
            style={{
              backgroundColor: k === selectedTile ? "yellow" : "inherit",
            }}
            key={k}
            onClick={selectTile(k)}
          >
            {v}
          </button>
        ))}
      </div>

      <div>
        {Object.entries(numbers).map(([k, v]) => (
          <button
            style={{
              backgroundColor: k === selectedTile ? "yellow" : "inherit",
            }}
            key={k}
            onClick={selectTile(k)}
          >
            {v}
          </button>
        ))}
      </div>

      <Tiles tiles={tiles} onSetTile={setTileHandler} />

      <div>
        Difficulty
        <input
          type="number"
          name="difficulty"
          min={3}
          max={6}
          value={tileDifficulty}
          onChange={difficultyChangeHandler}
        />
      </div>

      <div>
        Name
        <input
          type="text"
          name="name"
          value={tileName}
          onChange={nameChangeHandler}
        />
      </div>

      <h1>Preset</h1>
      <ul>
        {presets.map((preset, i) => (
          <li key={i}>
            <Link
              to={`/${preset.tiles}/${preset.difficulty}/${encodeURIComponent(
                preset.name
              )}`}
            >
              {preset.name} {new Array(preset.difficulty).fill("•").join("")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TileEditor;
