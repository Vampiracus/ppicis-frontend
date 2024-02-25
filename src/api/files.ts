import { configuredFetch } from '../utils/api'
import { themeFilesBaseURL } from './url'

export function postThemeFile(fd: FormData, theme_id: number) {
    return configuredFetch<{ file_id?: number }>(
        themeFilesBaseURL + theme_id, 
        { method: 'POST', noNotification: true, noJSONBody: true, body: fd },
    )
}