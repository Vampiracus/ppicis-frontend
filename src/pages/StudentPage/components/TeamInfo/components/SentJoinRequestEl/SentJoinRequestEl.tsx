import Button from 'components/Button/Button'
import React from 'react'
import styles from './SentJoinRequestEl.module.scss'
import { useSelectUser } from 'slices/selectors'
import { rejectInTeam } from 'api/teams'
import { useDispatch } from 'react-redux'
import { setStudentTeamId } from 'slices/teamsSlice'

const SentJoinRequestEl: React.FC<{ team_id: number }> = ({ team_id }) => {
    const userid = useSelectUser()!.id
    const dispatch = useDispatch()

    const cancelJoin = async () => {
        const res = await rejectInTeam(userid)
        
        if (res.status === 200) {
            dispatch(setStudentTeamId(null))
        }
    }

    return (
        <div className={styles.sentJoinRequest}>
            <span>Отправлен запрос на присоединение к команде #{ team_id }</span>
            <Button text='Отменить!' title='Отменить запрос на присоединение' onClick={cancelJoin}/>
        </div>
    );
};

export default SentJoinRequestEl