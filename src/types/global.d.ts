import type { userRole } from './types'

declare global {
    type TUser = {
        id: number
        login: string
        password: string
        role: userRole
        surname: string
        first_name: string
        second_name: string | null
        social: string
        group?: string
        organization?: string
        status: string | userStatus
    }
}