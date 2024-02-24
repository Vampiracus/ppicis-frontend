export const userRoles = {
    STUDENT: 'Student',
    MODERATOR: 'Moderator',
    MENTOR: 'Mentor',
    ADMIN: 'Admin',
} as const
export type userRole = typeof userRoles[keyof typeof userRoles]