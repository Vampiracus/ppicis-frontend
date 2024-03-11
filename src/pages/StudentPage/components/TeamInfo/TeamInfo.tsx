import React, { useEffect } from 'react'
import styles from './TeamInfo.module.scss'
import { getTeamTasks } from 'api/tasks'
import TaskList from './components/TaskList/TaskList'
import TeamNTheme from 'components/TeamNTheme/TeamNTheme'
import Card from 'components/Card/Card'
import { useSelectIsTeamLoading, useSelectStudentTeam, useSelectStudentTeamId } from 'slices/selectors'
import { useDispatch } from 'react-redux'
import { setIsLoading, setStudentTeam, setStudentTeamId } from 'slices/teamsSlice'
import Loader from 'components/Loader/Loader'
import NoTeamEl from './components/NoTeamEl/NoTeamEl'
import { getMyTeamId, getTeam } from 'api/teams'
import SentJoinRequestEl from './components/SentJoinRequestEl/SentJoinRequestEl'
import AcceptNewMember from './components/AcceptNewMember/AcceptNewMember'
import DeleteTeam from './components/DeleteTeam/DeleteTeam'

const TeamInfo: React.FC = () => {
    const [tasks, settasks] = React.useState<TTask[]>([])
    const [changed, setchanged] = React.useState<number>(0)
    const [created, setcreated] = React.useState(0)
    
    const team = useSelectStudentTeam()
    const team_id = useSelectStudentTeamId()
    const loading = useSelectIsTeamLoading()

    const dispatch = useDispatch()

    useEffect(() => {
        (async function () {
            dispatch(setIsLoading(true))
            const team_id = await getMyTeamId()
            let team: null | TTeamInfo = null
            if (team_id !== null) {
                dispatch(setStudentTeamId(team_id))
                team = await getTeam(team_id)
            }
            dispatch(setIsLoading(false))
            if (team) {
                dispatch(setStudentTeam(team))
            } else {
                dispatch(setStudentTeam(null))
                return
            }

            const t = await getTeamTasks(team.id)
            if (t.todos) {
                if (t.todos.length === 0) {
                    settasks([{
                        name: 'Вам пока не задали заданий',
                        isDone: true,
                        team_id: team.id,
                        description: '',
                        deadline: null,
                        id: 0,
                        updatedAt: '',
                        createdAt: '',
                    }])
                } else {
                    settasks(t.todos)
                }
            }
        })()
    }, [changed, dispatch])
    
    return (
        <>
        <Card className={styles.tasks}>
            <h2>Команда #{team?.id}</h2>
            {
                loading
                ? <div className={styles.tasks__loader}><Loader /></div>
                : team
                ? (<>
                    <TeamNTheme team={team}/>
                    <DeleteTeam increaseChanged={() => setchanged(changed + 1)}/>
                    <AcceptNewMember team={team} increaseChanged={() => setchanged(changed + 1)}/>
                    <TaskList tasks={tasks} changed={created} setchanged={setcreated} team_id={team.id}/>
                </>)
                : team_id !== null
                ? <SentJoinRequestEl team_id={ team_id } />
                : <NoTeamEl />
            }
            
        </Card>
        </>
    );
};

export default TeamInfo