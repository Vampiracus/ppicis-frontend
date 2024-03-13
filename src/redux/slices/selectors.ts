import { useTypedSelector } from '../store'

export const useSelectUser = () => useTypedSelector(s => s.user.data)
export const useSelectIsUserBeingLoaded = () => useTypedSelector(s => s.user.loading)

export const useSelectSeason = () => useTypedSelector(s => s.season.data)

export const useSelectMentorTeams = () => useTypedSelector(s => s.teams.mentorTeams)
export const useSelectStudentTeam = () => useTypedSelector(s => s.teams.studentTeam)
export const useSelectStudentTeamId = () => useTypedSelector(s => s.teams.studentTeamId)
export const useSelectIsTeamLoading = () => useTypedSelector(s => s.teams.loading)

export const useSelectEventsCreated = () => useTypedSelector(s => s.events.created)