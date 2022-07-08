import sanity from 'sanity';

export async function contactPageFetch() {
  const pageData = await sanity.fetch(`
    *[_id == "contactPage"]{
      heading
    }
  `);

  return pageData[0];
}
