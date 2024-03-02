import { createSlice } from '@reduxjs/toolkit'

export interface ITeamsState {
  mentorTeams: TTeamInfo[]
}

const initialState: ITeamsState = { mentorTeams: [] }

export const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setMentorTeams: (state, { payload } : { payload: TTeamInfo[] }) => {
      state.mentorTeams = payload
    },
  },
})

export const { setMentorTeams } = teamsSlice.actions

export default teamsSlice.reducer