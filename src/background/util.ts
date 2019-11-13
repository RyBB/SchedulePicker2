import { EventInfo } from '../model/event';

export const formatDate = (date: Date): string => {
    const hour = `0${date.getHours()}`.slice(-2);
    const minute = `0${date.getMinutes()}`.slice(-2);
    const time = hour + ':' + minute;
    return time; // HH:mm
};

export const sortByTimeFunc = (eventInfo, nextEventInfo): number => {
    if (new Date(eventInfo.startTime) > new Date(nextEventInfo.startTime)) {
        return 1; // nextEvent, event の順番に並べ替える
    }

    if (new Date(eventInfo.startTime) < new Date(nextEventInfo.startTime)) {
        return -1; // event, nextEvent の順番に並べ替える
    }

    return 0;
};