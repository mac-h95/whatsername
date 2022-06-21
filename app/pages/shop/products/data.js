import sanity from 'sanity';

export async function albumPathsFetch() {
  const albums = await sanity.fetch(
    `*[_type == "album" && !(_id in path("drafts.**"))]{
      slug
    }`
  );

  return albums.map((album) => ({
    params: { photos: album.slug.current }
  }));
}

export async function albumPageFetch(photos) {
  const pageData = await sanity.fetch(
    `*[slug.current == $photos]{
      _id,
      slug,
      seo{
        title,
        description,
        image,
        keywords
      },
      artist,
      cover,
      date,
      venue->{name},
      images[]{
        caption,
        image,
        photographer->{name, link}
      },
    }`,
    { photos }
  );
  return pageData[0];
}
