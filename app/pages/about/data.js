import sanity from 'sanity';

export async function aboutPageFetch() {
  const pageData = await sanity.fetch(`
    *[_id == "aboutPage"]{
      heading,
      body,
      "team": *[_type == "member" && !(_id in path("drafts.**"))]{
        founder,
        image,
        link,
        name,
        pronouns,
        role
      },
      "cta": *[_id == "cta"][0]{
        heading,
        subheading,
        subheading2,
        buttonText,
        buttonLink->{
          url
        }
      }
    }
  `);

  return pageData[0];
}
