import { configuredFetch } from '../utils/api'
import { userMeURL } from './url'

export function getMe() {
    return configuredFetch<TUser>(userMeURL)
}