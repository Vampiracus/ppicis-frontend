import { Reducer, configureStore } from '@reduxjs/toolkit'
import userSlice, { IUserState } from './slices/userSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export type IReducer = {
  user: Reducer<IUserState>
}

const reducer: IReducer = {
  user: userSlice,
}

export const createStore = () =>
  configureStore({ reducer })

export const store = createStore()
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector