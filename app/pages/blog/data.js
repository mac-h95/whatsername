import sanity from 'sanity';

export async function blogPageFetch() {
  const pageData = await client.fetch(`
    *[_id == "blogPage"]{
      heading,
      "posts": *[_type == "post" && !(_id in path("drafts.**"))]{
        _id,
        slug,
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
    slug
  }`
  );

  return posts.map((post) => ({
    params: { slug: post.slug.current }
  }));
}
export async function postPageFetch(slug) {
  const pageData = await sanity.fetch(
    `
    *[slug.current == $slug]{
      title,
      seo{
        image{asset{_ref}},
        description,
        keywords[]->{name}
      },
      date,
      cover{asset{_ref}},
      body[],
      author->{
        name,
        link,
        image{asset{_ref}}
      }
    }
  `,
    { slug }
  );
  return pageData[0];
}
