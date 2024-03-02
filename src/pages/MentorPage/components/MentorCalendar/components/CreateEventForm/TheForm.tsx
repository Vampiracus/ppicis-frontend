import Form from 'components/Form/Form'
import { useSelectMentorTeams } from 'slices/selectors'
import styles from './CreateEventForm.module.scss'
import Button from 'components/Button/Button'
import { createMeeting } from 'api/events'
import { validateThemeDesctiption, validateTodoName } from '../../../../../../utils/validation'
import { increaceCreated } from 'slices/eventsSlice'
import { useDispatch } from 'react-redux'

type Props = {
    date: number
}

const TheForm: React.FC<Props> = ({ date }) => {
    const teams = useSelectMentorTeams()
    const dispatch = useDispatch()

    const onSubmit: ((formEntries: Record<string, string | File>) => void) = async fe => {
        if (!confirm('Вы уверены, что все поля заполнены верно? Удалить или отредактировать встречу будет уже нельзя')) {
            return
        }

        const team_id = (teams.find(t => fe.team === t.theme.name + ': ' + t.students.map(s => s.student.surname).join(', ')))?.id

        if (team_id) {
            const res = await createMeeting({ ...fe, team_id, deadline: new Date(date).toLocaleDateString('en') } as unknown as TEventInit)
            
            if (res.event) {
                dispatch(increaceCreated())
            }
        }
    }
    
    return (
        <Form.Form onSubmit={onSubmit} class={styles.createEventForm}>
            <h2>Мероприятие {new Date(date).toLocaleDateString()}</h2>
            <Form.InputField 
                name='name'
                showName='Название мероприятия'
                placeholder='Введите название мероприятия...'
                startValue='Встреча с командой'
                validationF={validateTodoName}/>
            <Form.InputField 
                name='comment'
                showName='Описание мероприятия'
                placeholder='Введите описание мероприятия...'
                validationF={validateThemeDesctiption}/>
            <Form.SelectField
                name='team'
                options={teams.map(t => t.theme.name + ': ' + t.students.map(s => s.student.surname).join(', '))}
                showName='Команда'
                placeholder='Выберите команду'/>
            <Button text='Добавить!'/>
        </Form.Form>
    );
};

export default TheForm;