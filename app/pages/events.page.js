import Heading from 'heading';
import { eventsPageFetch } from './events/data';
import EventsList from './events/list';

export const getStaticProps = async () => {
  const { heading, events } = await eventsPageFetch();
  return {
    props: {
      heading,
      events
    }
  };
};

const Events = ({ heading, events }) => (
  <>
    <Heading heading={heading} />
    <EventsList events={events} />
  </>
);

export default Events;
