import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useQuery } from '@apollo/client';
import { QUERY_EVENTS } from '../utils/queries';

const localizer = momentLocalizer(moment)

const MyCalendar = props => {
  const { loading, data } = useQuery(QUERY_EVENTS);
  const eventData = data?.getEvents || {};
  let myEventsList = [];
  if (!loading) {
    myEventsList = eventData?.map((event) => {
      const startUnix = moment.unix(event.startDate / 1000);
      const endUnix = moment.unix(event.endDate / 1000);
      return (
        {
          'title': event.title,
          'description': event.description,
          'start': startUnix,
          'end': endUnix
        }
      )
    })
  }

  if (loading) {
    return (
      <h2>LOADING...</h2>
    )
  }
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "50vh", width: "90vw", margin: "auto"}}
      />
    </div>
  )
}

export default MyCalendar;