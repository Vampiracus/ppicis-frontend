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

    type TSeason = {
        id: number
        createdAt: string
        updatedAt: string
        start: string
        end: string
        name: string
    }

    type TThemeInit = {
        name: string
        description: string
        difficulty: number | null
    }

    type TTheme = TThemeInit & {
        id: number
        slide_id?: number | null
        status: string
        season_id: number
        createdAt: string
        updatedAt: string
    }
}