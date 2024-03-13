import { getStudentGrades } from 'api/grades'
import Card from 'components/Card/Card'
import { useEffect, useState } from 'react'
import { useSelectUser } from 'slices/selectors'
import styles from './StudentGrades.module.scss'
import Arrow from 'components/Arrow/Arrow'
import Modal from 'components/Modal/Modal'
import StudentEvent from '../StudentEvent/StudentEvent'

const StudentGrades = () => {
    const [grades, setgrades] = useState<TGradeWEvent[]>([])
    const [shownIndex, setshownIndex] = useState(0)
    const user = useSelectUser()
    const [selectedGrade, setselectedGrade] = useState<null | TGradeWEvent>(null);

    useEffect(() => {
        (async function() {
            const res = await getStudentGrades(user!.id)

            if (res.grades) {
                setgrades(res.grades)
            }
        })()
    }, [user])

    const total = grades.reduce((prev, cur) => prev + cur.grade, 0)
    const maxGrade = grades.reduce((prev, cur) => prev + cur.event.max_grade, 0)

    return (
        <>
        <Card className={styles.grades__outer}>
            <h2 style={{textAlign: 'center'}}>Оценки</h2>
            <div className={styles.grades}>
            {
                grades.slice(shownIndex, shownIndex + 3).map(grade => (
                    <div key={grade.id} className={styles.grades__grade} onClick={() => setselectedGrade(grade)}>
                        <div>{grade.grade} <small>из {grade.event.max_grade}</small></div>
                        <div>{new Date(grade.createdAt).toLocaleDateString()}</div>
                    </div>
                ))
            }
            </div>
            <div className={styles.grades__controls}>
                <Arrow left title={'Назад'} onClick={() => setshownIndex(Math.max(shownIndex - 1, 0))}/>
                <div>Всего {total} из {maxGrade}</div>
                <Arrow title={'Дальше'} onClick={() => setshownIndex(Math.max(Math.min(shownIndex + 1, grades.length - 3), 0))}/>
            </div>
        </Card>
        {
            selectedGrade 
            ? (
            <Modal shown={!!selectedGrade} setShown={() => setselectedGrade(null)}>
                <StudentEvent event={selectedGrade.event} grade={selectedGrade}/>
            </Modal>
            ) : ''
        }
        </>
    );
};

export default StudentGrades