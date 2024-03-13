import React from 'react'
import styles from './../TaskList.module.scss'

type Props = {
    task: TTask
    team_id: number
}

const TaskItem: React.FC<Props> = (props) => {
    return (
        <div className={styles.task + ' ' + (props.task.isDone ? styles.task_done : '')}>
            <a
                title={props.task.description}
                style={!props.task.isDone ? {textDecoration: 'underline', cursor: 'help'} : {}}
            >
                    { props.task.name }
            </a>
            <time dateTime={props.task.deadline || undefined}>{ props.task.deadline }</time>
        </div>
    );
};

export default TaskItem;