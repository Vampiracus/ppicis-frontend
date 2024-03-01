import { getMyTeams } from 'api/teams'
import Card from 'components/Card/Card'
import React from 'react';
import TeamInfo from './TeamInfo/TeamInfo'
import styles from './MyTeams.module.scss'
import { setMentorTeams } from 'slices/teamsSlice'
import { useSelectMentorTeams } from 'slices/selectors'
import { useDispatch } from 'react-redux'

const MyTeams = () => {
    const teams = useSelectMentorTeams()
    const dispatch = useDispatch()

    React.useEffect(() => {
        (async function getTeams() {
            const t = (await getMyTeams()).filter(t => t !== undefined) as TTeamInfo[]
            dispatch(setMentorTeams(t))
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