import Modal from 'components/Modal/Modal'
import React, { useEffect } from 'react'
import styles from './TeamTasks.module.scss'
import { shortName } from '../../../../../../utils/other'
import { getTeamTasks } from 'api/tasks'
import Button from 'components/Button/Button'
import TaskForm from './TaskForm/TaskForm'
import TaskList from './TaskList/TaskList'

type Props = {
    shown: boolean
    setShown: (x: boolean) => void
    team: TTeamInfo
}

const TeamTasks: React.FC<Props> = (props) => {
    const [tasks, settasks] = React.useState<TTask[]>([])
    const [showCreateTask, setshowCreateTask] = React.useState(false);
    const [created, setcreated] = React.useState(0);

    useEffect(() => {
        (async function () {
            const t = await getTeamTasks(props.team.id)
            if (t.todos) {
                if (t.todos.length === 0) {
                    settasks([{
                        name: 'Вы не задали заданий',
                        isDone: true,
                        team_id: props.team.id,
                        description: '',
                        deadline: null,
                        id: 0,
                        updatedAt: '',
                        createdAt: '',
                    }])
                } else {
                    settasks(t.todos)
                }
            }
        })()
    }, [props.team.id, created])

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
            <br/>
            <TaskList tasks={tasks} changed={created} setchanged={setcreated} team_id={props.team.id}/>

            <Button text='Добавить задачу' onClick={() => setshowCreateTask(true)}/>
        </Modal>
        <TaskForm
            shown={showCreateTask}
            setShown={setshowCreateTask}
            created={created}
            setCreated={setcreated}
            team_id={props.team.id}/>
        </>
    );
};

export default TeamTasks;