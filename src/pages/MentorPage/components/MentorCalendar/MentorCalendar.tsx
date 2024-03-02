import { getMyEvents } from 'api/events'
import Calendar from 'components/Calendar/Calendar'
import CalendarEl from 'components/Calendar/components/CalendarEl/CalendarEl'
import { useEffect, useState } from 'react';
import CreateEventForm from './components/CreateEventForm/CreateEventForm'
import { useSelectEventsCreated } from 'slices/selectors'
import EventForm from './components/EventForm/EventForm'


const MentorCalendar = () => {
    const [events, setevents] = useState<TEvent[]>([]);
    const created = useSelectEventsCreated()

    useEffect(() => {
        (async function() {
            const res = await getMyEvents()
            
            if (res.events) {
                setevents(res.events)
            }
        })()
    }, [created])

    return (
        <Calendar key={created} DefaultModalEl={CreateEventForm}>
            {
                events.map(event => (
                    <CalendarEl
                        date={new Date(event.deadline).getTime()}
                        isGlobal={!event.team_id}
                        isMeeting={!!event.team_id}
                        key={event.id}>
                        <EventForm event={event} />
                    </CalendarEl>
                ))
            }
        </Calendar>
    );
};

export default MentorCalendar;