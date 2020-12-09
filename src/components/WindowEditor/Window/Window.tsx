import classNames from "classnames";
import React from "react";
import { TTile } from "../windowEditor.types";
import "./Window.css";
import { printDifficulty } from "../WindowEditor.utils";

interface IProps {
  tiles: TTile[];
  name: string;
  difficulty: number;
  onSetTile: (id: number) => void;
}

const Window: React.FC<IProps> = ({ tiles, onSetTile, name, difficulty }) => {
  const setTileHandler = (i: number) => () => {
    if (onSetTile) {
      onSetTile(i);
    }
  };

  return (
    <div className="Window">
      <div className="Window__Wrapper">
        {tiles.map((cell, i) => {
          const classes = classNames("Window__Tile", {
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
        <div className="Window__Footer">
          <div className="Window__Footer-content">
            <div className="Window__Name">{name}</div>
            <div className="Window__Difficulty">
              {printDifficulty(difficulty)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Window;
