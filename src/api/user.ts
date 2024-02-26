import { configuredFetch } from '../utils/api'
import { authURL, logoutURL, mentorForURL, registerURL, userMeURL } from './url'

export type IAuth = { login: string, password: string, rememberme?: 'on'}

export type IRegisterData = {
    role: string
    login: string
    password: string
    surname: string
    first_name: string
    second_name: string
    group?: string | null
    organization?: string | null
    social: string
}

export function getMe() {
    return configuredFetch<{ user?: TUser }>(userMeURL, { notification: { none: true } })
}

export function authenticate(authData: IAuth) {
    return configuredFetch(authURL, { method: 'POST', saveStatus: true }, authData)
}

export function register(registerData: IRegisterData) {
    registerData.organization = null
    if (registerData.role === mentorForURL) {
        registerData.organization = registerData.group
        registerData.group = null
    }
    return configuredFetch<{user: Omit<TUser, 'password'>}>(
        registerURL + registerData.role,
        {method: 'POST'},
        { ...registerData, role: undefined })
}

export function logout() {
    return configuredFetch(logoutURL, { method: 'POST', saveStatus: true, notification: { none: true } })
}