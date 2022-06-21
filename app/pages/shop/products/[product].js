import sanity from 'sanity';
import DetailsPane from './details';
import ImagesPane from './images';

export const getStaticPaths = async () => {
  const products = await sanity.fetch(`
  *[_type == "product" && !(_id in path("drafts.**"))]{
    slug{
      current
    }
  }
  `);

  return products.map(({ slug }) => ({
    params: { product: slug.current }
  }));
};

export const getStaticProps = async ({ params }) => {
  const product = await sanity.fetch(
    `
  *[slug.current == $product]{
    name, description, category, images, in_stock, options, price, available_in
  }
  `,
    { product: params.product }
  );

  return {
    props: {
      product
    }
  };
};

const Product = ({ product }) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <DetailsPane {...product} />
      <ImagesPane images={product.images} />
    </div>
  );
};

export default Product;
