import { getDateString } from "date";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "sanity";

const Event = ({ tickets, image, title, venue, date }) => (
  <Link href={tickets} passHref>
    <a
      className="flex flex-col items-center justify-center space-y-2 md:my-9 md:mr-9"
      target="_blank"
      rel="noopener"
    >
      <Image src={urlFor(image)} alt={title} width={260} height={260} />
      <div className="text-center">
        <h3 className="font-semibold">{title}</h3>
        <small>
          {venue.name}, {getDateString(date)}
        </small>
      </div>
    </a>
  </Link>
);

const EventsList = ({ events }) => {
  const pastEvents = events.filter(
    (event) => new Date(event.date) < new Date()
  );
  const upcomingEvents = events.filter(
    (event) => new Date(event.date) > new Date()
  );

  return (
    <div className="flex flex-col items-start space-y-8 md:px-32 md:w-screen">
      <div className="flex flex-col items-center space-y-8 md:justify-start md:space-y-0 md:flex-wrap md:flex-row">
        {upcomingEvents.map((event) => (
          <Event key={event._id} {...event} />
        ))}
      </div>
      <div>
        <h2 className="mb-3 text-2xl font-semibold tracking-widest text-center md:text-left md:flex-wrap text-background-300">
          Past Events
        </h2>
        <div className="flex flex-col items-center space-y-8 md:justify-start md:space-y-0 md:flex-wrap md:flex-row ">
          {pastEvents.map((event) => (
            <Event key={event._id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsList;
