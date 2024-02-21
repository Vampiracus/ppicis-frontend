import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const createStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined
) =>
  configureStore({
    reducer: {
        userSlice,
    },
    ...options,
  })

export const store = createStore()
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector