import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface IUserState {
  data: null | TUser
  load: boolean
  error: 'none' | unknown
}

const initialState: IUserState = {
  data: null,
  load: false,
  error: 'none',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, { payload }) => {
      const userInfo = payload
      state.data = userInfo
    },
    load: (state, { payload }) => {
      state.load = payload
    },
    setError: (state, { payload }) => {
      state.error = payload
    },
  },
})

export const { load, setUserData, setError } = userSlice.actions

export default userSlice.reducer

export const getUser = (state: RootState) => state.user.data