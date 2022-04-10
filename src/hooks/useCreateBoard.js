import { useEffect, useState } from "react";
import { createBoard } from "../modules/createBoard";
import { useSelector } from "react-redux"; 
import { getMines } from "../api-client";

export const useCreateBoard = (size, mines) => { 
  const isNewGame = useSelector((state) => state.game.isNewGame); 

  const [ gridButtons, setgridButton ] = useState([]);  
  const [ listMines, setListMines ] = useState([]);  
  const [ first, setFirst ] = useState(false);  

  useEffect(() => {
    if(!isNewGame && first) return;

    const run = async (size, mines) => {
      try {
        setgridButton([]);
        const { data, msg } = await getMines(size, mines);

        if(msg && msg === "success")  {
          setListMines(data);
          setgridButton(createBoard(size, data));
          setFirst(true);
        }

      } catch (error) {
        console.log(error);
      }
    }

    run (size, mines);

  },[isNewGame]);

  return { gridButtons, setgridButton, listMines };



  // const { data: listMines, error, mutate } = useGetMines(size, mines);
  // const [gridButtons, setgridButton] = useState([]);  

  // useEffect(() => {

  //   if(!isNewGame) return;

  //   setgridButton([]);
  //   mutate(undefined);

  // },[isNewGame])

  // useEffect(() => { 
  //   if (listMines && listMines?.data.length > 0) {
  //     setgridButton(createBoard(size, listMines.data));
  //   }
  // }, [listMines, size]);

  // if (!listMines || error) return { gridButtons, setgridButton, listMines: [] };

  // return { gridButtons, setgridButton, listMines: listMines.data };
};
