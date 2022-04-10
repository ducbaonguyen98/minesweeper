import { combineReducers, configureStore } from '@reduxjs/toolkit'

import game from './slice/game';

const rootReducer = combineReducers({ 
    game
})

const store = configureStore({ 
    reducer: rootReducer
})

export default store;
