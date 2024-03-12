import { getEventGrades } from 'api/grades'
import { FC, useEffect, useState } from 'react'
import styles from './StudentEvent.module.scss'

type Props = {
    event: TEvent
}

const EventGrades: FC<Props> = ({ event }) => {
    const [grades, setgrades] = useState<TGrade[]>([]);

    useEffect(() => {
        (async function() {
            const res = await getEventGrades(event.id)
            if (res.grades) {
                setgrades(res.grades)
            }
        })()
    }, [])

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