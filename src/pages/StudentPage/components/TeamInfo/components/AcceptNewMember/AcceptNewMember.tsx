import Button from 'components/Button/Button'
import React from 'react';
import { shortName } from '../../../../../../utils/other'
import styles from './AcceptNewMember.module.scss'
import { studentInTeamStatuses } from '../../../../../../types/types'
import { acceptInTeam, rejectInTeam } from 'api/teams'

type Props = {
    team: TTeamInfo,
    increaseChanged: () => void
}

const AcceptNewMember: React.FC<Props> = ({ team, increaseChanged }) => {
    const joiningStudent = team.students.find(s => s.status !== studentInTeamStatuses.APPROVED)
    
    if (!joiningStudent) return ''

    const reject = async () => {
        const res = await rejectInTeam(joiningStudent.student.id)

        if (res.status === 200) {
            increaseChanged()
        }
    }

    const accept = async () => {
        const res = await acceptInTeam(joiningStudent.student.id)

        if (res.status === 200) {
            increaseChanged()
        }
    }

    return (
        <div className={styles.newMembers}>
            <span><em>{shortName(joiningStudent.student)}</em> желает присоединиться к вашей команде</span> <br/>
            <div className={styles.newMembers__buttons}>
                <Button text='Принять!' title='Принять этого студента в команду' onClick={accept}/>
                <Button class={styles.newMembers__reject} text='Отклонить!' title='Не принимать этого студента в команду' onClick={reject}/>
            </div>
        </div>
    );
};

export default AcceptNewMember;