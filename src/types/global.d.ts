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

    type TTeamTheme = TThemeInit & {
        id: number
        slide_id?: number | null
        createdAt: string
    }

    type TUserInfo = {
        id: number
        surname: string
        first_name: string
        second_name: string | null
        group: string | null
        social: string | null
    }

    type TTeamInfo = {
        id: number
        season_id: number
        mentor_id: number
        status: string
        createdAt: string
        students: Array<{
            record_id: number
            student: TUserInfo
        }>
        theme: TTeamTheme
    }

    type TTaskInit = {
        team_id: number
        name: string
        description: string
        deadline: string | null
    }

    type TTask = TTaskInit & {
        id: number
        isDone: boolean
        updatedAt: string
        createdAt: string
    }

    type TEventInit = {
        name: string
        deadline: string
        team_id?: number | null
        comment: string
    }

    type TEvent = TEventInit & {
        id: number
        max_grade: number
        season_id: number
        updatedAt: string
        createdAt: string
    }

    type TGrade = {
        message: string,
        grade: {
            id: number
            student_id: number
            grade: number
            mentor_id: number
            did_attend: boolean
            comment: string
            updatedAt: string
            createdAt: string
        }
    }
}