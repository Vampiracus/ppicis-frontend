import Form from 'components/Form/Form'
import React from 'react'
import StudentFormPart from './StudentFormPart'
import styles from './EventForm.module.scss'
import Button from 'components/Button/Button'
import { setGrades } from 'api/grades'

type Props = {
    event: TEvent
    team?: TTeamInfo
    closeForm: () => void
}

const GradesForm: React.FC<Props> = ({ event, team, closeForm }) => {
    if (!team) return ''

    const onSubmit: ((formEntries: Record<string, string | File>) => void) = async fe => {
        const r = Object.keys(fe).reduce((prev, cur) => {
            const splt = cur.split('-')
            if (!prev[splt[0]]) {
                prev[splt[0]] = {}
            }
            if (splt[1] === 'comment') {
                prev[splt[0]].comment = (fe[cur] === '' ? null : fe[cur])
            } else if (splt[1] === 'grade') {
                prev[splt[0]].grade = (fe[cur] === '' ? null : fe[cur])
            } else {
                prev[splt[0]][splt[1]] = fe[cur]
            }
            return prev
        }, {} as Record<string, any>)

        const res = await setGrades(r, event.id)
        
        if (!res.find(r => r.grade === undefined)) {
            closeForm()
        }
    }

    return (
        <Form.Form class={styles.gradeForm} onSubmit={onSubmit}>
            <h2>{new Date(event.deadline).toLocaleDateString()}: ведомости</h2>
            {
                team.students.map(s => (
                    <StudentFormPart key={s.record_id} student={s.student} max_grade={event.max_grade} />
                ))
            }
            <Button text='Сохранить!' title='Сохранить новые отметки о посещении и оценки'/>
        </Form.Form>
    );
};

export default GradesForm;