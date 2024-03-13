import { getMyEvents } from 'api/events'
import Calendar from 'components/Calendar/Calendar'
import CalendarEl from 'components/Calendar/components/CalendarEl/CalendarEl'
import { useEffect, useState } from 'react';
import StudentEvent from '../StudentEvent/StudentEvent'


const StudentCalendar = () => {
    const [events, setevents] = useState<TEvent[]>([]);

    useEffect(() => {
        (async function() {
            const res = await getMyEvents()
            
            if (res.events) {
                setevents(res.events)
            }
        })()
    }, [])

    return (
        <Calendar DefaultModalEl={() => <></>}>
            {
                events.map(event => (
                    <CalendarEl
                        date={new Date(event.deadline).getTime()}
                        isGlobal={!event.team_id}
                        isMeeting={!!event.team_id}
                        key={event.id}>
                        <StudentEvent event={event}/>
                    </CalendarEl>
                ))
            }
        </Calendar>
    );
};

export default StudentCalendar