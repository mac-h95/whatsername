import sanity from 'sanity';

export async function indexPageFetch() {
  const pageData = await sanity.fetch(`
    *[_id == "homePage"]{
      heading,
      image
    }
  `);

  return pageData[0];
}
