import Form from 'components/Form/Form'
import Modal from 'components/Modal/Modal'
import styles from './TaskForm.module.scss'
import React from 'react';
import Button from 'components/Button/Button'
import { changeTask, postTask } from 'api/tasks'
import { validateTodoDeadline, validateTodoDescription, validateTodoName } from '../../../../../../../utils/validation'

type SubmitF = ((formEntries: Record<string, string | File | null | boolean>) => void)

type Props = {
    shown: boolean
    setShown: (x: boolean) => void
    task?: TTask
    created: number
    setCreated: (x: number) => void
    team_id: number
}

const TaskForm: React.FC<Props> = (props) => {
    const isChanging = !!props.task

    const onSubmitCreate: SubmitF = async fe => {
        if (fe.deadline === '') {
            fe.deadline = null
        }
        // @ts-expect-error file is deleted. All properties from TTaskInit are present
        const res = await postTask({ ...fe, team_id: props.team_id })
        
        if (res.todo) {
            props.setCreated(props.created! + 1)
            props.setShown(false)
        }
    }

    const onSubmitChange: SubmitF = async fe => {
        if (fe.deadline === '') {
            fe.deadline = null
        }
        fe.isDone = !!fe.isDone
        
        // @ts-expect-error file is deleted. All properties from TTaskInit are present
        const res = await changeTask({ ...fe, team_id: props.team_id, id: props.task?.id })
        
        if (res.status === 200) {
            props.setCreated(props.created! + 1)
            props.setShown(false)
        }
    }

    return (
        <Modal shown={props.shown} setShown={props.setShown}>
            <Form.Form class={styles.taskForm} onSubmit={isChanging ? onSubmitChange : onSubmitCreate}>
                <h2> {isChanging ? 'Редактирование задачи' : 'Добавление задачи'} </h2>
                <Form.InputField
                    placeholder='Введите название задачи...'
                    name='name'
                    showName='Название'
                    startValue={props.task?.name}
                    validationF={validateTodoName}/>
                <Form.InputField
                    placeholder='Введите описание задачи...'
                    name='description'
                    showName='Описание'
                    startValue={props.task?.description}
                    validationF={validateTodoDescription}/>
                <Form.InputField
                    name='deadline'
                    showName='Дедлайн'
                    type='date'
                    startValue={props.task?.deadline || undefined}
                    notRequired
                    validationF={validateTodoDeadline}/>
                {
                    props.task
                    ? (
                        <Form.CheckInput
                            name='isDone'
                            showName='Выполнено'/>
                    ) : ''
                }
                <br/>
                <br/>
                <Button text={isChanging ? 'Сохранить!' : 'Создать!'} onClick={e => {
                    const conf = confirm('Вы уверены? Это действие будет нельзя отменить')
                    if (!conf) {
                        e.preventDefault()
                    }
                }}/>

            </Form.Form>
        </Modal>
    );
};

export default TaskForm;