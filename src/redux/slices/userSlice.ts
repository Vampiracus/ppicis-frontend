import { createSlice } from '@reduxjs/toolkit'

export interface IUserState {
  data: null | TUser
  loading: boolean
}

const initialState: IUserState = { data: null, loading: true }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, { payload } : { payload: null | TUser }) => {
      state.data = payload
    },
    setIsUserBeingLoaded: (state, { payload } : { payload: boolean }) => {
      state.loading = payload
    },
  },
})

export const { setUserData, setIsUserBeingLoaded } = userSlice.actions

export default userSlice.reducer