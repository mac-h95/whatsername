import sanity from 'sanity';

export async function shopPageFetch() {
  const pageData = await sanity.fetch(`
    *[_id == "shopPage"]{
      heading,
      "products": *[_type == "product"]{
        slug,
        available_in,
        category->{
          name
        },
        description,
        images,
        in_stock,
        name,
        options->,
        price,
        sale_price
      }
    }
  `);

  return pageData[0];
}
