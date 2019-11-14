import { EventInfo, MyGroupEvent, Participant } from '../types/event';

export default class EventConverter {
    static convertToMyGroupEvent(eventInfo: EventInfo, participants: Participant[]): MyGroupEvent {
        return {
            eventInfo: eventInfo,
            participants: participants,
        };
    }

    static convertToEventInfo(event: any): EventInfo {
        return {
            id: event.id,
            subject: event.subject,
            startTime: new Date(event.start.dateTime),
            endTime: new Date(event.end.dateTime),
            eventType: event.eventType,
            eventMenu: event.eventMenu,
            attendees: event.attendees.map(attendee => {
                return { id: attendee.id, name: attendee.name };
            }),
            visibilityType: event.visibilityType,
            isAllDay: event.isAllDay,
            isStartOnly: event.isStartDay,
        };
    }
}
