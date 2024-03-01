import { configuredFetch } from '../utils/api'
import { eventsURL, myEventsURL } from './url'

export function getMyEvents() {
    return configuredFetch<{events?: TEvent[]}>(myEventsURL, { notification: { onFail: true } })
}

export function createMeeting(event: TEventInit) {
    return configuredFetch<{ event?: TEvent}>(eventsURL, {
        method: 'POST'
    }, event)
}