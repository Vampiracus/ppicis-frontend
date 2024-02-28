import { configuredFetch } from '../utils/api'
import { teamTodosBaseURL, todosURL } from './url'

export function getTeamTasks(team_id: number) {
    return configuredFetch<{ todos?: TTask[] }>(teamTodosBaseURL + team_id, { notification: { none: true }})
}

export function postTask(task: TTaskInit) {
    return configuredFetch<{ todo?: TTask[] }>(todosURL, { method: 'POST' }, task)
}

export function changeTask(task: TTaskInit & { isDone: boolean, id: number }) {
    return configuredFetch<{ todo?: TTask[] }>(todosURL, { method: 'PUT', saveStatus: true }, task)
}