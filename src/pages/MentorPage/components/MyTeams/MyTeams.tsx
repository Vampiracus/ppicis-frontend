import { getMyTeams } from 'api/teams'
import Card from 'components/Card/Card'
import React from 'react';
import TeamInfo from './TeamInfo/TeamInfo'
import styles from './MyTeams.module.scss'

const MyTeams = () => {
    const [teams, setteams] = React.useState<(TTeamInfo | undefined)[]>([]);

    React.useEffect(() => {
        (async function getTeams() {
            const t = await getMyTeams()
            setteams(t)
        })()
    }, [])

    return (
        <Card className={styles.teamCard}>
            <h2 style={{textAlign: 'center'}}>Мои команды</h2>
            { teams.map(team => {
                if (!team) return ''
                return <TeamInfo key={team.id} team={team}/>
            })}
        </Card>
    );
};

export default MyTeams;