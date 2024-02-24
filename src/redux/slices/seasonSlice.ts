import { createSlice } from '@reduxjs/toolkit'

export interface ISeasonState {
  data: null | TSeason
}

const initialState: ISeasonState = { data: null }

export const seasonSlice = createSlice({
  name: 'season',
  initialState,
  reducers: {
    setSeasonData: (state, { payload } : { payload: null | TSeason }) => {
      state.data = payload
    },
  },
})

export const { setSeasonData } = seasonSlice.actions

export default seasonSlice.reducer