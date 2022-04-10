import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInterval } from "../../hooks";
import { updateTime } from "../../redux/slice/game";
import { RiArrowLeftLine } from "react-icons/ri";  
import { Link } from "react-router-dom"; 
export const HeaderBoardGame = () => { 

  const dispatch = useDispatch();
  const isStartGame = useSelector(state => state.game.isStartGame); 
  const isNewGame = useSelector(state => state.game.isNewGame);  
  
  const [timeElapsed, setTimeElapsed] = React.useState(0);

  useInterval(
    () => { 
      setTimeElapsed((timeElapsed) => timeElapsed + 1);
    },
    isStartGame ? 1000 : null
  );

  useEffect(() => {

    if(timeElapsed === 0 || isStartGame) return;  
    
    dispatch(updateTime(timeElapsed));

  }, [isStartGame]);

  useEffect(() => {

    if(!isNewGame) return;

    setTimeElapsed(0); 
    dispatch(updateTime(0));

  }, [isNewGame]); 


  return (
    <div className="border border-b-0 p-3">
      <div className="flex items-center justify-between">
        <Link to="/" className="p-1 hover:bg-white-500 rounded">
          <RiArrowLeftLine className="text-xl" /> 
        </Link> 
        <div className="bg-info text-white flex justify-center items-center w-20 tracking-wider py-2 px-10 rounded">
          {`00${timeElapsed}`.slice(-3)}
        </div>
        <div></div>
      </div>
    </div>
  );
}; 
