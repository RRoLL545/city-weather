import { configureStore } from '@reduxjs/toolkit'
import weatherForecastReducer from './slices/weatherForecastSlice'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  weatherForecastReducer
})

export const setupStore = () => {
  return configureStore({
  reducer: rootReducer
})
} 

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];