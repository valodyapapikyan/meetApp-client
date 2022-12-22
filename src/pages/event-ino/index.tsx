import React, {FC, useEffect} from 'react';
import EventListRender from '../../components/render-event-list';
import useEvents from '../../hooks/use-events/index';
import {useLocation, useParams} from "react-router";

const EventInfo: FC<any> = () => {

    const {getEvent} = useEvents();
    const {eventID}  = useParams();

    useEffect(() => {
        getEvent(eventID as string)
    }, [eventID])

    return (
        <div style={{marginTop: '200px'}}>
            <h1> EVENT INFO </h1>
        </div>
    );
};
export default EventInfo;
