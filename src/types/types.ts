export const userRoles = {
    STUDENT: 'Student',
    MODERATOR: 'Moderator',
    MENTOR: 'Mentor',
    ADMIN: 'Admin',
} as const
export type userRole = typeof userRoles[keyof typeof userRoles]

export const themeStatuses = {
    CREATED: 1,
    APPROVED: 2,
    DENIED: 3,
    BANNED: 4,
} as const
export type themeStatus = typeof themeStatuses[keyof typeof themeStatuses]

export const teamStatuses = {
    APPROVED: 2,
    DENIED: 3,
    CREATED: 1,
} as const
export type teamStatus = typeof teamStatuses[keyof typeof teamStatuses]

export const userStatuses = {
    APPROVED: 2,
    CREATED: 1,
} as const
export type userStatus = typeof userStatuses[keyof typeof userStatuses]

export const externalEventStatuses = {
    APPROVED: 3,
    CREATED: 2,
    INTERNAL: 1,
} as const
export type externalEventStatus = typeof externalEventStatuses[keyof typeof externalEventStatuses]

export const studentInTeamStatuses = {
    PENDING: 1,
    APPROVED: 2,
} as const
export type studentInTeamStatus = typeof studentInTeamStatuses[keyof typeof studentInTeamStatuses]

export const seasonStatuses = {
    CREATING_TEAMS: 1,
    WORK: 2,
    END: 3,
} as const
export type seasonStatus = typeof seasonStatuses[keyof typeof seasonStatuses]
