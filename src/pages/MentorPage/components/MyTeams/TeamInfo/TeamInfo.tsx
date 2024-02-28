import React from 'react'
import { shortName } from '../../../../../utils/other'
import styles from './TeamInfo.module.scss'
import TeamTasks from './TeamTasks/TeamTasks'

const TeamInfo: React.FC<{ team: TTeamInfo }> = ({ team }) => {
    const [showTasks, setshowTasks] = React.useState(false);

    return (
        <>
        <div className={styles.team}>
            <div className={styles.team__students} onClick={() => setshowTasks(true)}>
                {team.students.map(s => <span key={s.record_id}>{shortName(s.student)}</span>)}
            </div>
            <span>«{team.theme.name}»</span>
        </div>
        <TeamTasks shown={showTasks} setShown={setshowTasks} team={team}/>
        </>
    );
};

export default TeamInfo;