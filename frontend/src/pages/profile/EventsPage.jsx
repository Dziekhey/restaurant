import React from 'react';
import { events } from '../../data/Constants';
import EventCard from '../../components/EventCard';



const EventsPage = () => {
  return (
    <>
    <div className='my-8 px-5 flex flex-wrap gap-5 justify-center'>
      {
        events.map((event) => <EventCard />)
      }
    </div>
    </>
  )
}

export default EventsPage;