import { configuredFetch } from '../utils/api'
import { eventGradesBaseURL, gradesURL } from './url'

type TGradeInit = { [key: number]: {
    grade: string
    comment: string
    did_attend?: 'on'
}}

export async function setGrades(grades: TGradeInit, event_id: number) {
    const fullGrades = Object.entries(grades).map(([student_id, g]) => {
        const did_attend = !!g.did_attend
        return {
            ...g,
            did_attend,
            student_id,
            event_id
        }
    })
    
    const promises = fullGrades.map(g => 
        configuredFetch<{grade: TGrade}>(gradesURL, { method: 'POST', notification: { onFail: true } }, g)
        )
    return Promise.all(promises)
}

export function getEventGrades(event_id: number) {
    return configuredFetch<{ grades?: TGrade[] }>(eventGradesBaseURL + event_id, { notification: { onFail: true } })
}