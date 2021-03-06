import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useScreenshot } from "use-react-screenshot";
import { Button } from "../commons";
import { newGame } from "../../redux/slice/game";
import { Link } from "react-router-dom";
import { formatTime, randomNumber } from "../../untils";
import { LazyLoadImage } from 'react-lazy-load-image-component'; 

export const Modal = ({  
  divRef,
  showModal,
  setShowModal,
}) => {
  const dispatch = useDispatch();

  const timeGame = useSelector(state => state.game.timeGame);
  const isWinGame = useSelector(state => state.game.isWinGame);

  const point = useMemo(() => {
    if(!isWinGame) return 0;  

    if(timeGame <= 10) {
      return  randomNumber(timeGame * 30);
    } else if (timeGame <= 30) {
      return  randomNumber(timeGame * 5);
    } else if (timeGame <= 60) {
      return  randomNumber(timeGame * 2);
    } else { 
      return  randomNumber(timeGame);
    }

  },[timeGame, isWinGame]);

  const [image, takeScreenShot] = useScreenshot();
  useEffect(() => {
    if (showModal) {
      takeScreenShot(divRef.current);
    }
  }, [showModal]);

  const handleNewGame = () => {
    dispatch(newGame());
    setShowModal(false);
  }

  return (
    <div className="">
      {showModal && (
        <div
          // onClick={() => setShowModal(false)}
          className={`opacity-50 fixed inset-0 z-40 bg-black`}
        ></div>
      )}
      <div
        className={`${
          !showModal ? "-translate-y-full" : "visible -translate-y-28"
        } w-[23rem] mx-auto transition-all duration-700 justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none`}
      >
        <div className="w-full">
          <div className="pb-5 space-y-10 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* <img
              src={image}
              alt="result"
              className="w-full h-40 rounded-tr-lg rounded-tl-lg object-cover shadow-sm opacity-50"
            /> */}

            <LazyLoadImage
                  alt="" 
                  src={image}
                  className="w-full h-40 rounded-tr-lg rounded-tl-lg object-cover shadow-sm opacity-50" />
            <div className="text-center space-y-2">
              <h3 className="font-semibold text-xl">
                {isWinGame ? "You won " : "You lost "}the game in {formatTime(timeGame)}
              </h3>
              <div className="space-x-2">
                <span className="text-gray-500 text-sm uppercase">Point:</span>
                <span className="text-xl font-medium">{point}</span>
              </div>
            </div>
            <div className="flex justify-around">
              <Button
                onClick={handleNewGame}
                text="New game"
                className="bg-info text-white hover:bg-opacity-80"
              />
              <Link to="/">
                <Button text="Home page" className="bg-white hover:bg-white-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 
