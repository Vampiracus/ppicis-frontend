import Form from 'components/Form/Form'
import styles from './NoTeamEl.module.scss'
import { validateNumber } from '../../../../../../utils/validation'
import Button from 'components/Button/Button'
import { createNewTeam, getTeam, joinTeam } from 'api/teams'
import { useDispatch } from 'react-redux'
import { setStudentTeam, setStudentTeamId } from 'slices/teamsSlice'

const NoTeamEl = () => {
    const dispatch = useDispatch()

    const createTeam = async () => {
        const res = await createNewTeam()

        if (res.studentsInTeams) {
            dispatch(setStudentTeam(await getTeam(res.studentsInTeams[0].team_id)))
        }
    }

    const onSubmit: ((formEntries: Record<string, string | File>) => void) = async fe => {
        const team_id = Number(fe.team_id)
        const res = await joinTeam(team_id)

        if (res.studentsInTeams) {
            dispatch(setStudentTeamId(team_id))
            dispatch(setStudentTeam(await getTeam(res.studentsInTeams.team_id)))
        }
    }

    return (
        <Form.Form class={styles.noTeamForm} onSubmit={onSubmit}>
            <div>Вы не состоите в команде</div>
            <Form.InputField
                name='team_id'
                showName='id команды'
                placeholder='Введите id команды'
                validationF={s => validateNumber(s, 'id')}
                infotext='Подайте запрос на присоединение к команде. Создатель команды получит возможность принять запрос. id комады — её номер (отображается у членов команды в разделе Команда #<номер команды>)'/>
            <div className={styles.noTeamForm__controls}>
                <Button type='button' text='Создать новую команду' title='Создать свою команду' onClick={createTeam}/>
                <Button text='Отправить запрос' title='Отправить запрос на присоединение к другой команде'/>
            </div>
        </Form.Form>
    );
};

export default NoTeamEl;