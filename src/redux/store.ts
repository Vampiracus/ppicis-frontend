import { Reducer, configureStore } from '@reduxjs/toolkit'
import userSlice, { IUserState } from './slices/userSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import seasonSlice, { ISeasonState } from 'slices/seasonSlice'

export type IReducer = {
  user: Reducer<IUserState>
  season: Reducer<ISeasonState>
}

const reducer: IReducer = {
  user: userSlice,
  season: seasonSlice,
}

export const createStore = () =>
  configureStore({ reducer })

export const store = createStore()
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector