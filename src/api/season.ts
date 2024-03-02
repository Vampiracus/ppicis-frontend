import { configuredFetch } from '../utils/api'
import { currentSeasonURL } from './url'

export function getCurrentSeason() {
    return configuredFetch<{ season?: TSeason }>(currentSeasonURL, { notification: { none: true } })
}
