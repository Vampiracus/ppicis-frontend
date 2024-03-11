import { configuredFetch } from '../utils/api'
import { eventFilesBaseURL, themeFilesBaseURL } from './url'

export type EventFile = {
    record_id: number
    event_id: number
    file_id: number
    createdAt: string
    name: string
}

export function postThemeFile(fd: FormData, theme_id: number) {
    return configuredFetch<{ file_id?: number }>(
        themeFilesBaseURL + theme_id, 
        { method: 'POST', noJSONBody: true, body: fd },
    )
}

export function getEventFiles(event_id: number) {
    return configuredFetch<{ file_ids: EventFile[] }>(eventFilesBaseURL + event_id, { notification: { none: true } })
}

export function postEventFile(fd: FormData, event_id: number) {
    return configuredFetch<{ file_id?: number }>(
        eventFilesBaseURL + event_id, 
        { method: 'POST', noJSONBody: true, body: fd },
    )
}