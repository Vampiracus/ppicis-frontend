import React from 'react'
import styles from './TeamNTheme.module.scss'
import { shortName } from '../../utils/other'

type Props = {
    team: TTeamInfo
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

const TeamNTheme: React.FC<Props> = ({ team, onClick }) => {
    return (
        <div className={styles.team}>
            <div className={styles.team__students + ' ' + (onClick ? styles.team__students_clickable : '')} onClick={onClick}>
                {team.students.map(s => <span key={s.record_id}>{shortName(s.student)}</span>)}
            </div>
            <span>«{team.theme.name}»</span>
        </div>
    );
};

export default TeamNTheme;