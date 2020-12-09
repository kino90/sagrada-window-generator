import classNames from "classnames";
import React from "react";
import { TTile } from "./tileeditor.types";
import "./Tiles.css";

interface IProps {
  tiles: TTile[];
  onSetTile: (id: number) => void;
}

const Tiles: React.FC<IProps> = ({ tiles, onSetTile }) => {
  const setTileHandler = (i: number) => () => {
    if (onSetTile) {
      onSetTile(i);
    }
  };

  return (
    <div className="Tiles">
      {tiles.map((cell, i) => {
        const classes = classNames("Tiles__Tile", {
          "Tile--red": cell === "r",
          "Tile--green": cell === "g",
          "Tile--blue": cell === "b",
          "Tile--yellow": cell === "y",
          "Tile--purple": cell === "p",
          "Tile--one": cell === "1",
          "Tile--two": cell === "2",
          "Tile--three": cell === "3",
          "Tile--four": cell === "4",
          "Tile--five": cell === "5",
          "Tile--six": cell === "6",
        });

        return (
          <div className={classes} key={i} onClick={setTileHandler(i)}>
            {"123456".split("").includes(cell) ? cell : null}
          </div>
        );
      })}
    </div>
  );
};

export default Tiles;
