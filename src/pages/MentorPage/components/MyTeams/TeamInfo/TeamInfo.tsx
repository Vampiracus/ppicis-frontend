import React from 'react'
import { shortName } from '../../../../../utils/other'
import styles from './TeamInfo.module.scss'

const TeamInfo: React.FC<{ team: TTeamInfo }> = ({ team }) => {
    return (
        <div className={styles.team}>
            <div className={styles.team__students}>
                {team.students.map(s => <span key={s.record_id}>{shortName(s.student)}</span>)}
            </div>
            <span>«{team.theme.name}»</span>
        </div>
    );
};

export default TeamInfo;