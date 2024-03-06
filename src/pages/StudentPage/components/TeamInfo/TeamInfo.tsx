import React, { useEffect } from 'react'
import styles from './TeamInfo.module.scss'
import { getTeamTasks } from 'api/tasks'
import TaskList from './components/TaskList/TaskList'
import TeamNTheme from 'components/TeamNTheme/TeamNTheme'
import Card from 'components/Card/Card'
import { useSelectIsTeamLoading, useSelectStudentTeam } from 'slices/selectors'
import { useDispatch } from 'react-redux'
import { setIsLoading, setStudentTeam } from 'slices/teamsSlice'
import { getMyTeam } from 'api/teams'
import Loader from 'components/Loader/Loader'
import NoTeamEl from './components/NoTeamEl/NoTeamEl'

const TeamInfo: React.FC = () => {
    const [tasks, settasks] = React.useState<TTask[]>([])
    const [created, setcreated] = React.useState(0)
    
    const team = useSelectStudentTeam()
    const loading = useSelectIsTeamLoading()

    const dispatch = useDispatch()

    useEffect(() => {
        (async function () {
            dispatch(setIsLoading(true))
            const team = await getMyTeam()
            dispatch(setIsLoading(false))
            if (team) {
                dispatch(setStudentTeam(team))
            } else {
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
    }, [])
    
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
                    <br/>
                    <TaskList tasks={tasks} changed={created} setchanged={setcreated} team_id={team.id}/>
                </>)
                : <NoTeamEl />
            }
            
        </Card>
        </>
    );
};

export default TeamInfo