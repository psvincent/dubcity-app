import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_EVENTS } from "../utils/queries";

const EventList = () => {
    const {data} = useQuery(QUERY_EVENTS);

    const eventData = data.getEvents || {};
    
    
}

export default EventList;
