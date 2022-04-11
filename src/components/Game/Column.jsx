import React, { useMemo } from "react";
import { useSelector } from "react-redux"; 

const Column = ({ data, handleClick, size }) => {
  const isEndGame = useSelector(state => state.game.isEndGame);
  const { x, y, isClick, value } = data; 

  const [color, newValue] = useMemo(() => {   
    switch (value) {
        case 0:
            return ["", ""];
        case 1:
            return ["text-one", value];
        case 2:
            return ["text-two", value];
        case 3:
            return ["text-three", value];
        case 4:
            return ["text-four", value];
        case "X":
            return ["",  "💣"];
        default:
            return ["text-one", value];
    } 
  },[value]);

  return (
    <button
      type="button"
      disabled={isEndGame ? isEndGame : isClick}
      onClick={() => {
        handleClick(x, y);
      }}
      className={`${color} ${ isClick || isEndGame ? "cursor-not-allowed" : "" } 
      ${ isClick ? "bg-white-500" : ""} ${ size === 9 ? "w-8 h-8 md:w-10 md:h-10" : "w-5 h-5 md:w-10 md:h-10"} flex justify-center items-center font-medium transition-all duration-100 border`}
    >
      {  
        // isClick ? value === "X"  ? "💣"  : value !== 0 ? value : "" : ""
        isClick ? newValue : "" 
      }
    </button>
  );
};

export default Column;
