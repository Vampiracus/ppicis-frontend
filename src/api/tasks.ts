import { configuredFetch } from '../utils/api'
import { teamTodosBaseURL, todosURL } from './url'

export function getTeamTasks(team_id: number) {
    return configuredFetch<{ todos?: TTask[] }>(teamTodosBaseURL + team_id, { notification: { none: true }})
}

export function postTask(task: TTaskInit) {
    return configuredFetch<{ todos?: TTask[] }>(todosURL, { method: 'POST', notification: { onFail: true }}, task)
}