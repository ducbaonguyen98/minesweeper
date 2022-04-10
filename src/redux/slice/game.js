import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  level: 0, // Beginner => 0, Advantage => 1  
  timeGame: 0,
  isStartGame: false, 
  isEndGame: false, 
  isNewGame: false,
  isWinGame: false,
};

const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    chooseLevel: (state, action) => {
        state.level = action.payload;
    },
    startGame: (state, action) => {
      state.isStartGame = true;
    },
    newGame: (state, action) => {
      state.isNewGame = true;
      state.isEndGame = false;
      state.isStartGame = false;
    },
    endGame: (state, action) => {
      state.isStartGame = false;
      state.isEndGame = true;
      state.isNewGame = false;
    }, 
    winGame: (state, action) => {
      state.isWinGame = action.payload;
    },
    updateTime: (state, action) => {
      state.timeGame = action.payload;
    }
  },
});

const { actions, reducer } = game;
export const { chooseLevel, startGame, endGame, updateTime, newGame, winGame } = actions;
export default reducer;
