// import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartRedux"
import userReducer from "./userRedux"
import storage from 'redux-persist/lib/storage' 

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'


const reducer = combineReducers({
    cart:cartReducer,
    user:userReducer,
})
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
})

  
  export const persistor = persistStore(store)

