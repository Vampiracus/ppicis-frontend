import { configuredFetch } from '../utils/api'
import { authURL, userMeURL } from './url'

export type IAuth = { login: string, password: string, rememberme?: 'on'}

export function getMe() {
    return configuredFetch<{ user?: TUser }>(userMeURL)
}

export function authenticate(authData: IAuth) {
    return configuredFetch(authURL, { method: 'POST'}, authData)
}