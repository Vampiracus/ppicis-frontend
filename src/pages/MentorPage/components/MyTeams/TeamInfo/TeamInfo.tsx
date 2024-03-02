import React from 'react'
import TeamTasks from './TeamTasks/TeamTasks'
import TeamNTheme from 'components/TeamNTheme/TeamNTheme'

const TeamInfo: React.FC<{ team: TTeamInfo }> = ({ team }) => {
    const [showTasks, setshowTasks] = React.useState(false);

    return (
        <>
        <TeamNTheme team={team} onClick={() => setshowTasks(true)}/>
        <TeamTasks shown={showTasks} setShown={setshowTasks} team={team}/>
        </>
    );
};

export default TeamInfo;