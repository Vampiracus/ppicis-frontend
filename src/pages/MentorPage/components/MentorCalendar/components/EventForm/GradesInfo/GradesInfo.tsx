import { getEventGrades } from 'api/grades'
import React, { useCallback, useEffect, useState } from 'react'
import styles from './GradesInfo.module.scss'
import { shortName } from '../../../../../../../utils/other'

type Props = {
    team: TTeamInfo
    event: TEvent
}

const GradesInfo: React.FC<Props> = (props) => {
    const [grades, setgrades] = useState<TGrade[]>([])

    const getStudent = useCallback((id: number, team: TTeamInfo) => {
        return team.students.find(s => s.student.id === id)
    }, [])

    useEffect(() => {
        (async function() {
            const r = await getEventGrades(props.event.id)

            if (r.grades) {
                setgrades(r.grades)
            }
        })()
    }, [props.event.id]);

    return (
        <div className={styles.gradesInfo}>
            {
                grades.map(g => {
                    const s = getStudent(g.student_id, props.team)
                    if (!s) return ''
                    return (
                    <div className={styles.gradesInfo__student}>
                        <p title={g.comment}>
                            {shortName(s.student)} <br/>
                            {g.did_attend ? 'Присустствовал' : 'Отсутствовал'}
                        </p>
                        <p>
                            <span title='Оценка студента'>{g.grade !== null ? g.grade + ' из ' + props.event.max_grade : ''}</span> <br/>
                            <span title='Дата выставления оценки'>{new Date(g.updatedAt).toLocaleDateString()}</span>
                        </p>
                    </div>
                    )
                })
            }
        </div>
    );
};

export default GradesInfo;