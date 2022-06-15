import sanity from 'sanity';

export async function eventsPageFetch() {
  const pageData = await sanity.fetch(`
    *[_id == "eventsPage"]{
      heading,
      subheading,
      "events": *[_type == "event" && !(_id in path("drafts.**"))]{
        _id,
        date,
        image,
        venue->{name},
        tickets,
        title
      }
    }
  `);
  return pageData[0];
}
