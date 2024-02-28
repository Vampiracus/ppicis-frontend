import Form from 'components/Form/Form'
import Modal from 'components/Modal/Modal'
import styles from './TaskForm.module.scss'
import React from 'react';
import Button from 'components/Button/Button'
import { postTask } from 'api/tasks'
import { validateTodoDeadline, validateTodoDescription, validateTodoName } from '../../../../../../../utils/validation'

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

    const onSubmitCreate: ((formEntries: Record<string, string | File>) => void) = async fe => {
        // @ts-expect-error file is deleted. All properties from TThemeInit are present
        const res = await postTask({ ...fe, team_id: props.team_id })
        
        if (res.todos) {
            props.setCreated(props.created! + 1)
            props.setShown(false)
        }
    }

    const onSubmitChange: ((formEntries: Record<string, string | File>) => void) = async fe => {
        console.log(fe)
        
        // // @ts-expect-error file is deleted. All properties from TThemeInit are present
        // const res = await changeTheme({ ...fe, file: undefined, id: props.theme!.id })
        
        // if (res.status === 200) {
        //     props.setCreated(props.created! + 1)
        //     props.setShown(false)
        //     const fd = new FormData()
        //     fd.append('file', fe.file)
        //     postThemeFile(fd, props.theme!.id)
        // }
    }

    return (
        <Modal shown={props.shown} setShown={props.setShown}>
            <Form.Form class={styles.taskForm} onSubmit={isChanging ? onSubmitChange : onSubmitCreate}>
                <h2> {isChanging ? 'Редактирование темы' : 'Добавление темы'} </h2>
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
                    validationF={validateTodoDeadline}/>
                <br/>
                <br/>
                <Button text={isChanging ? 'Сохранить!' : 'Создать!'}/>
            </Form.Form>
        </Modal>
    );
};

export default TaskForm;