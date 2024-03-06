import { createSlice } from '@reduxjs/toolkit'

export interface ITeamsState {
  mentorTeams: TMentorTeamInfo[]
  studentTeam: TTeamInfo | null
  loading: boolean
}

const initialState: ITeamsState = {
  mentorTeams: [],
  studentTeam: null,
  loading: false
}

export const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setMentorTeams: (state, { payload } : { payload: TMentorTeamInfo[] }) => {
      state.mentorTeams = payload
    },
    setStudentTeam: (state, { payload } : { payload: TTeamInfo | null }) => {
      state.studentTeam = payload
    },
    setIsLoading: (state, { payload } : { payload: boolean }) => {
      state.loading = payload
    },
  },
})

export const { setMentorTeams, setStudentTeam, setIsLoading } = teamsSlice.actions

export default teamsSlice.reducer