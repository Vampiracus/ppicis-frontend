import { createSlice } from '@reduxjs/toolkit'

export interface TEventsState {
  created: number
}

const initialState: TEventsState = { created: 0 }

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    increaceCreated: (state) => {
      state.created += 1
    },
  },
})

export const { increaceCreated } = eventsSlice.actions

export default eventsSlice.reducer