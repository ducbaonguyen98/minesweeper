import React, { useRef, useState } from "react";  
import { HeaderBoardGame, BoardGame, Modal } from "../components/Game"; 
import { Content } from "../components/commons"; 
import { useDispatch } from "react-redux";
import { endGame } from "../redux/slice/game";


const Game = () => {   
  const dispatch = useDispatch();
  const [ showModal, setShowModal ] = useState(false); 
  
  const divRef = useRef(null); 

  const handleShowModal = () => {  
    dispatch(endGame());
    setShowModal(true);  
  } 

  return (
    <>
      <Content>  
        <HeaderBoardGame />
        <BoardGame divRef={divRef} handleShowModal={handleShowModal}/>
      </Content>
      <Modal divRef={divRef} showModal={showModal} setShowModal={setShowModal}/>
    </> 
  )
};

export default Game;
