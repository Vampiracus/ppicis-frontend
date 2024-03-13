import React from 'react'
import TaskItem from './TaskItem/TaskItem'
import styles from './TaskList.module.scss'

type Props = {
    tasks: TTask[]
    team_id: number
}

const TaskList: React.FC<Props> = ({ tasks, team_id }) => {
    const done = tasks.filter(task => task.isDone)
    const ndone = tasks.filter(task => !task.isDone)

    return (
        <>
        <h3>Задачи для команды</h3>
        <div className={styles.task}>
            <span>Название</span>
            <span>Дедлайн</span>
        </div>
        { ndone.map(task => <TaskItem key={task.id} task={task} team_id={team_id}/>)}
        { done.map(task => <TaskItem key={task.id} task={task} team_id={team_id}/>)}
        </>
    )
}

export default TaskList;