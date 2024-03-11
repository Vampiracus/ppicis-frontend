import { configuredFetch } from '../utils/api'
import { acceptJoinTeamURL, createTeamURL, dismantleMyTeamURL, joinTeamURL, myTeamsURL, rejectJoinTeamURL, teamInfoBaseURL } from './url'

type NewTeam = {
    id: number
    student_id: number
    team_id: number
    status: string
    updatedAt: string
    createdAt: string
}

export async function getMyTeams() {
    const ids = await configuredFetch<{ teams?: number[] }>(myTeamsURL, { notification: { onFail: true } })

    if (ids.teams && ids.teams.length > 0) {
        const promises = ids.teams.map(id => 
            configuredFetch<{team?: TMentorTeamInfo}>(teamInfoBaseURL + id, { notification: { onFail: true } }))
        const res = await Promise.all(promises)
        return res.map(r => r.team)
    }
    return []
}

export async function getMyTeamId(): Promise<number | null> {
    return (await configuredFetch<{ team_id?: number }>(myTeamsURL, { notification: { none: true } })).team_id || null
}

export function createNewTeam() {
    return configuredFetch<{ studentsInTeams?: NewTeam[] }>(createTeamURL, { method: 'POST', saveStatus: true })
}

export async function getTeam(id: number): Promise<TTeamInfo | null> {
    return (await configuredFetch<{team?: TTeamInfo}>(teamInfoBaseURL + id, { notification: { none: true } })).team || null
}

export function joinTeam(team_id: number) {
    return configuredFetch<{studentsInTeams?: TStudentInTeam}>(
        joinTeamURL,
        { method: 'POST', notification: { onFail: true } },
        { team_id })
}

export function rejectInTeam(user_id: number) {
    return configuredFetch(rejectJoinTeamURL, { method: 'PUT', saveStatus: true }, { user_id })
}

export function acceptInTeam(user_id: number) {
    return configuredFetch(acceptJoinTeamURL, { method: 'PUT', saveStatus: true }, { user_id })
}

export function dismantleMyTeam() {
    return configuredFetch(dismantleMyTeamURL, { method: 'DELETE', saveStatus: true })
}