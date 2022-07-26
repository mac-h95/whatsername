import sanity from 'sanity';

export async function blogPageFetch() {
  const pageData = await sanity.fetch(`
    *[_id == "blogPage"]{
      heading,
      "posts": *[_type == "post" && !(_id in path("drafts.**"))]{
        slug,
        snippet,
        title,
        date,
        cover
      }
    }
  `);
  return pageData[0];
}

export async function postPathFetch() {
  const posts = await sanity.fetch(
    `*[_type == "post" && !(_id in path("drafts.**"))]{
    slug{
      current
    }
  }`
  );

  return posts.map(({ slug }) => ({
    params: { slug: slug.current }
  }));
}

export async function postPageFetch(slug) {
  const pageData = await sanity.fetch(
    `
    *[slug.current == $slug]{
      title,
      metadata{
        image{asset{_ref}},
        description,
        keywords[]->{name}
      },
      date,
      cover{asset{_ref}},
      body[] {
        ...,
        markDefs[] {
          ...,
<<<<<<< HEAD
          reference->
=======
          reference->{slug}
>>>>>>> bddf39a25551122fe609dc597f11be3dc7a718fd
        }
      },
      author->{
        name,
        link,
        role,
        image{asset{_ref}}
      }
    }
  `,
    { slug }
  );
  return pageData[0];
}
