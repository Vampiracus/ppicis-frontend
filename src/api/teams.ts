import { configuredFetch } from '../utils/api'
import { myTeamsURL, teamInfoBaseURL } from './url'

export async function getMyTeams() {
    const ids = await configuredFetch<{ teams?: number[] }>(myTeamsURL, { notification: { onFail: true } })

    if (ids.teams && ids.teams.length > 0) {
        const promises = ids.teams.map(id => 
            configuredFetch<{team?: TTeamInfo}>(teamInfoBaseURL + id, { notification: { onFail: true } }))
        const res = await Promise.all(promises)
        return res.map(r => r.team)
    }
    return []
}