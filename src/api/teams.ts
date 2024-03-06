import { configuredFetch } from '../utils/api'
import { createTeamURL, myTeamsURL, teamInfoBaseURL } from './url'

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

export async function getMyTeam(): Promise<TTeamInfo | null> {
    const resp = await configuredFetch<{ team_id?: number[] }>(myTeamsURL, { notification: { none: true } })
    const id = Number(resp.team_id)

    if (!isNaN(id)) {
        return (await configuredFetch<{team?: TTeamInfo}>(teamInfoBaseURL + id, { notification: { onFail: true } })).team || null
    }
    return null
}

export function createNewTeam() {
    return configuredFetch<{ studentsInTeams?: NewTeam[] }>(createTeamURL, { method: 'POST', saveStatus: true })
}

export async function getTeam(id: number): Promise<TTeamInfo | null> {
    return (await configuredFetch<{team?: TTeamInfo}>(teamInfoBaseURL + id, { notification: { onFail: true } })).team || null
}