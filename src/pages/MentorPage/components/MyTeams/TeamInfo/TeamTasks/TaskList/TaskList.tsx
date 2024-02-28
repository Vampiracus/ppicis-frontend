import React from 'react'
import TaskItem from './TaskItem/TaskItem'
import styles from './TaskList.module.scss'

type Props = {
    tasks: TTask[]
    changed: number
    setchanged: (x: number) => void
    team_id: number
}

const TaskList: React.FC<Props> = ({ tasks, changed, setchanged, team_id }) => {
    const done = tasks.filter(task => task.isDone)
    const ndone = tasks.filter(task => !task.isDone)

    return (
        <>
        <div className={styles.task}>
            <span>Название</span>
            <span>Дедлайн</span>
        </div>
        { ndone.map(task => <TaskItem key={task.id} task={task} changable changed={changed} setchanged={setchanged} team_id={team_id}/>)}
        { done.map(task => <TaskItem key={task.id} task={task} team_id={team_id}/>)}
        </>
    )
}

export default TaskList;