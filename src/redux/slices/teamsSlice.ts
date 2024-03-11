import { createSlice } from '@reduxjs/toolkit'

export interface ITeamsState {
  mentorTeams: TMentorTeamInfo[]
  studentTeam: TTeamInfo | null
  studentTeamId: number | null
  loading: boolean
}

const initialState: ITeamsState = {
  mentorTeams: [],
  studentTeam: null,
  studentTeamId: null,
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
    setStudentTeamId: (state, { payload } : { payload: number | null }) => {
      state.studentTeamId = payload
    },
  },
})

export const { setMentorTeams, setStudentTeam, setIsLoading, setStudentTeamId } = teamsSlice.actions

export default teamsSlice.reducer