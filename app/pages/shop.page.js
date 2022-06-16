import { commerce } from 'commerce';
import Heading from 'heading';
import Image from 'next/image';
import Link from 'next/link';
import sanity from 'sanity';

export const getStaticProps = async () => {
  return {
    props: {
      pageData: await sanity.getDocument('shopPage'),
      products: await commerce.products.list()
    }
  };
};

const Shop = ({ pageData, products }) => {
  console.log(products);
  return (
    <div>
      <Heading heading={pageData.heading} />
      <ul>
        {products.data.map((product) => (
          <li key={product.permalink}>
            <Link href={`/shop/products/${product.permalink}`}>
              <a className="flex flex-col items-center text-center">
                <Image
                  src={product.image.url}
                  alt={product.name}
                  width={400}
                  height={250}
                />
                <div className="flex flex-col items-center space-y-2">
                  <h3 className="mt-4 text-xl font-bold">{product.name}</h3>
                  <span className="font-thin tracking-wider">
                    {
                      product.attributes.filter(
                        (attribute) => attribute.name === 'Available In'
                      )[0].value
                    }
                  </span>
                  <span className="font-bold">
                    {product.price.formatted_with_symbol}
                  </span>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Shop;
