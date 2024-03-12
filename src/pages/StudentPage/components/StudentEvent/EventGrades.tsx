import { getEventGrades } from 'api/grades'
import { FC, useEffect, useState } from 'react'
import styles from './StudentEvent.module.scss'

type Props = {
    event: TEvent
    grade?: TGrade
}

const EventGrades: FC<Props> = ({ event, grade }) => {
    const [grades, setgrades] = useState<TGrade[]>(grade ? [grade] : []);

    useEffect(() => {
        (async function() {
            if (grades) return
            const res = await getEventGrades(event.id)
            if (res.grades) {
                setgrades(res.grades)
            }
        })()
    }, [event, grades])

    if (grades.length === 0) return ''

    return (
        <div className={styles.studentEvent__grades}>
            {
                grades.map(grade => (
                    <div key={grade.id} className={styles.studentEvent__grades__grade}>
                        <span> Присутствовал: </span>
                        <span>
                            {
                                grade.did_attend
                                ? 'Да'
                                : 'Нет'
                            }</span>
                        <span> Оценка: </span>
                        <span> {grade.grade} <small>из {event.max_grade}</small></span>
                        <span> Комментарий: </span>
                        <span> {grade.comment} </span>
                    </div>
                ))
            }
        </div>
    );
};

export default EventGrades;