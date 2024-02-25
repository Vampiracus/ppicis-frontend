import { configuredFetch } from '../utils/api'
import { myThemesURL, themesURL } from './url'

export function getMyThemes() {
    return configuredFetch<{ themes?: TTheme[] }>(myThemesURL, { noNotification: true })
}

export function postTheme(theme: TThemeInit) {
    return configuredFetch<{ theme?: TTheme }>(themesURL, { method: 'POST', noNotification: true }, theme)
}