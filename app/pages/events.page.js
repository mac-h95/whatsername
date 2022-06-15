import Heading from 'heading';
import { eventsPageFetch } from './events/data';
import EventsList from './events/event';

export const getStaticProps = async () => {
  return {
    props: {
      pageData: await eventsPageFetch()
    }
  };
};

const Events = ({ pageData }) => (
  <div>
    <Heading heading={pageData.heading} />
    <EventsList events={pageData.events} />
  </div>
);

export default Events;
