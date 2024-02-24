import { createSlice } from '@reduxjs/toolkit'

export interface IUserState {
  data: null | TUser
}

const initialState: IUserState = { data: null }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, { payload } : { payload: null | TUser }) => {
      state.data = payload
    },
  },
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer