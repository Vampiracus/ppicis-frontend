export const serverURL = 'http://localhost:3000'

export const userURL = serverURL + '/user'
export const userMeURL = userURL + '/me'

export const authURL = serverURL + '/auth'
export const logoutURL = authURL + '/logout'
export const registerURL = authURL + '/register'
export const mentorForURL = '/mentor'
export const studentForURL = '/student'

export const seasonsURL = serverURL + '/seasons'
export const currentSeasonURL = seasonsURL + '/current'

export const themesURL = serverURL + '/themes'
export const myThemesURL = themesURL + '/my'

export const filesURL = serverURL + '/files'
export const themeFilesBaseURL = filesURL + '/theme/'
export const eventFilesBaseURL = filesURL + '/event/'
export function fileURL(id: number) {
    return filesURL + '/' + id
}

export const teamsURL = serverURL + '/teams'
export const teamInfoBaseURL = teamsURL + '/info/'
export const myTeamsURL = teamsURL + '/my'
export const dismantleMyTeamURL = myTeamsURL + '/dismantle'
export const createTeamURL = teamsURL + '/create'
export const joinTeamURL = teamsURL + '/join'
export const rejectJoinTeamURL = joinTeamURL + '/reject'
export const acceptJoinTeamURL = joinTeamURL + '/accept'

export const todosURL = serverURL + '/todos'
export const teamTodosBaseURL = todosURL + '/team/'

export const eventsURL = serverURL + '/events'
export const myEventsURL = eventsURL + '/my'

export const gradesURL = serverURL + '/grades'
export const studentGradesBaseURL = gradesURL + '/student/'
export const eventGradesBaseURL = gradesURL + '/event/'