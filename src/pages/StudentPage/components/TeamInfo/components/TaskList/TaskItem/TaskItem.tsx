import React from 'react'
import styles from './../TaskList.module.scss'

type Props = {
    task: TTask
    team_id: number
} & ({
    changable: true
    changed: number
    setchanged: (x: number) => void
} | {
    changable?: undefined
    changed?: undefined
    setchanged?: undefined
})

const TaskItem: React.FC<Props> = (props) => {
    return (
        <div className={styles.task + ' ' + (!props.changable ? styles.task_done : '')}>
            <a
                title={props.task.description}
                style={props.changable ? {textDecoration: 'underline'} : {}}
            >
                    { props.task.name }
            </a>
            <time dateTime={props.task.deadline || undefined}>{ props.task.deadline }</time>
        </div>
    );
};

export default TaskItem;