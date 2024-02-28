import Modal from 'components/Modal/Modal'
import React, { useEffect } from 'react'
import styles from './TeamTasks.module.scss'
import { shortName } from '../../../../../../utils/other'
import { getTeamTasks } from 'api/tasks'
import Button from 'components/Button/Button'
import TaskForm from './TaskForm/TaskForm'

type Props = {
    shown: boolean
    setShown: (x: boolean) => void
    team: TTeamInfo
}

const TeamTasks: React.FC<Props> = (props) => {
    const [tasks, settasks] = React.useState<TTask[]>([])
    const [showCreateTask, setshowCreateTask] = React.useState(false);

    useEffect(() => {
        (async function () {
            const t = await getTeamTasks(props.team.id)
            if (t.todos) {
                settasks(t.todos)
            }
        })()
    }, [props.team.id])

    return (
        <>
        <Modal shown={props.shown} setShown={props.setShown} class={styles.tasks}>
            <h2>Руководство командой</h2>
            <div className={styles.team}>
            <div className={styles.team__students}>
                {props.team.students.map(s => <span key={s.record_id}>{shortName(s.student)}</span>)}
            </div>
            <span>«{props.team.theme.name}»</span>
            </div>

            <div>
                {JSON.stringify(tasks)}
            </div>

            <Button text='Добавить задачу' onClick={() => setshowCreateTask(true)}/>
        </Modal>
        <TaskForm
            shown={showCreateTask}
            setShown={setshowCreateTask}
            created={0}
            setCreated={() => {}}
            team_id={props.team.id}/>
        </>
    );
};

export default TeamTasks;