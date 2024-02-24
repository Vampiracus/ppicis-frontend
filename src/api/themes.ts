import { configuredFetch } from '../utils/api'
import { myThemesURL } from './url'

export function getMyThemes() {
    return configuredFetch<{ themes?: TTheme[] }>(myThemesURL, { noNotification: true })
}
