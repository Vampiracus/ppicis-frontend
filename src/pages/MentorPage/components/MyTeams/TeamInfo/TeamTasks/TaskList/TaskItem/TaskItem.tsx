import React from 'react'
import styles from './../TaskList.module.scss'
import TaskForm from '../../TaskForm/TaskForm'

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
    const [showForm, setshowForm] = React.useState(false);

    return (
        <>
        <div className={styles.task + ' ' + (!props.changable ? styles.task_done : '')}>
            <a
                title={props.task.description}
                style={props.changable ? {textDecoration: 'underline'} : {}}
                onClick={ props.changable ? () => setshowForm(true) : () => {}}
            >
                    { props.task.name }
            </a>
            <time dateTime={props.task.deadline || undefined}>{ props.task.deadline }</time>
        </div>
        {
            showForm
            ? ( <TaskForm
                shown={showForm}
                setShown={setshowForm}
                task={props.task}
                created={props.changed || 0}
                setCreated={props.setchanged || (() => {})}
                team_id={props.team_id}/>
            )
            : ''
        }
        </>
    );
};

export default TaskItem;