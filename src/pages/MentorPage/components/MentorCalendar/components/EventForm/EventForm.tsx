import React, { useState } from 'react'
import styles from './EventForm.module.scss'
import TeamNTheme from 'components/TeamNTheme/TeamNTheme'
import { useSelectMentorTeams } from 'slices/selectors'
import Button from 'components/Button/Button'
import Modal from 'components/Modal/Modal'
import GradesForm from './GradesForm'

type Props = {
    event: TEvent
}

const EventForm: React.FC<Props> = ({ event }) => {
    const mentorTeams = useSelectMentorTeams()
    const [showGrades, setshowGrades] = useState(false);

    const team = mentorTeams.find(t => t.id === event.team_id)

    return (
        <>
        <div className={styles.eventForm}>
            <h2>{ new Date(event.deadline).toLocaleDateString() }</h2>
            <h2>{ event.name }</h2>
            <span>{ event.comment }</span>
            {
                team
                ? (
                    <>
                        <br />
                        <br />
                        <TeamNTheme team={team}/>
                        <br />
                        Тут будут оценки
                        <br />
                        <br />
                        <br />
                        <Button text='Ведомости' title='Нажмите, чтобы выставить оценки' onClick={() => setshowGrades(true)}/>
                    </>
                )
                : ''
            }
        </div>
        <Modal shown={showGrades} setShown={setshowGrades}>
            <GradesForm event={event} team={team} closeForm={() => setshowGrades(false)}/>
        </Modal>
        </>
    );
};

export default EventForm;