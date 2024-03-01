import { Reducer, configureStore } from '@reduxjs/toolkit'
import userSlice, { IUserState } from './slices/userSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import seasonSlice, { ISeasonState } from 'slices/seasonSlice'
import teamsSlice, { ITeamsState } from 'slices/teamsSlice'
import eventsSlice, { TEventsState } from 'slices/eventsSlice'

export type IReducer = {
  user: Reducer<IUserState>
  season: Reducer<ISeasonState>
  teams: Reducer<ITeamsState>
  events: Reducer<TEventsState>
}

const reducer: IReducer = {
  user: userSlice,
  season: seasonSlice,
  teams: teamsSlice,
  events: eventsSlice,
}

export const createStore = () =>
  configureStore({ reducer })

export const store = createStore()
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector