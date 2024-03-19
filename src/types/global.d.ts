import type { seasonStatus, studentInTeamStatus, userRole } from './types'

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
        status: seasonStatus
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
        status?: string
    }

    type TTeamInfo = {
        id: number
        season_id: number
        mentor_id: number | null
        status: string
        createdAt: string
        students: Array<{
            record_id: number
            student: TUserInfo
            status: studentInTeamStatus
        }>
        theme: TTeamTheme | null
    }

    type TMentorTeamInfo = {
        id: number
        season_id: number
        mentor_id: number
        status: string
        createdAt: string
        students: Array<{
            record_id: number
            student: TUserInfo
            status: studentInTeamStatus
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
        id: number
        student_id: number
        grade: number
        mentor_id: number
        did_attend: boolean
        comment: string
        updatedAt: string
        createdAt: string
    }
    type TGradeWEvent = TGrade & {
        event_id: number,
        event: TEvent
    }

    type TStudentInTeam = {
        id: number
        team_id: number
        student_id: number
        status: string
        createdAt: string
        updatedAt: string
    }
}