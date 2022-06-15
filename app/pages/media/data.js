import sanity from 'sanity';

export async function mediaPageFetch() {
  const pageData = await sanity.fetch(`
    *[_id == "mediaPage"]{
      heading,
      "albums": *[_type == "album" && !(_id in path("drafts.**"))] | order(date desc){
        _id,
        artist,
        cover,
        date,
        venue->{name},
        slug
      }
    }
  `);

  return pageData[0];
}
