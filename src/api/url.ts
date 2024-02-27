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
export function fileURL(id: number) {
    return filesURL + '/' + id
}

export const teamsURL = serverURL + '/teams'
export const teamInfoBaseURL = teamsURL + '/info/'
export const myTeamsURL = teamsURL + '/my'