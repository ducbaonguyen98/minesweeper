import React, { useState } from "react";
import Row from "./Row";
import Column from "./Column";
import { checkClick } from "../../modules";
import { useCreateBoard, useLevel } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../commons";

import { startGame, winGame } from "../../redux/slice/game";

export const BoardGame = React.memo(({ divRef, handleShowModal }) => {
  const dispatch = useDispatch();

  const isStartGame = useSelector((state) => state.game.isStartGame);
  const levelGame = useSelector((state) => state.game.level);
  
  const [listClicked, setListClicked] = useState([]);

  const [size, minies] = useLevel(levelGame);
  const { gridButtons, setgridButton, listMines } = useCreateBoard(
    size,
    minies
  );

  const handleClick = (x, y) => {
      if (!isStartGame) dispatch(startGame());

      const newGrids = [...gridButtons];
      const {
        gridButtons: data,
        buttonClicked,
        isWin,
      } = checkClick(newGrids, x, y, listMines, listClicked);
      setListClicked(buttonClicked);
      setgridButton(data);
      if (newGrids[x][y].value === "X" || isWin) {
        dispatch(winGame(isWin));
        setListClicked([]);
        handleShowModal();
      }
    };

  return (
    <div
      ref={divRef}
      className={`${gridButtons.length === 0 ? "w-[360px] h-[360px] flex justify-center items-center bg-white-500" : ""} border ${
        gridButtons.length !== 0 ? "border-0" : ""
      }`}
    > 
      {gridButtons.length === 0 && <Loading />}
      {gridButtons.map((gridButton, i) => (
        <Row key={i.toString()}>
          {gridButton.map((button, j) => (
            <Column
              handleClick={handleClick}
              key={j.toString()}
              data={button}
              size={size}
            />
          ))}
        </Row>
      ))}
    </div>
  );
}); 
