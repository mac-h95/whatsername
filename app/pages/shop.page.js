import Heading from 'heading';
import { shopPageFetch } from './shop/data';
import List from './shop/list';
import Navigation from './shop/navigation';
import { useEffect } from 'react';

export const getStaticProps = async () => {
  const { heading, products } = await shopPageFetch();

  return {
    props: {
      heading,
      products
    }
  };
};

export const Shop = ({ heading, products }) => {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );
    }
  }, []);

  return (
    <>
      <Heading heading={heading} />
      <Navigation />
      <List products={products} />
    </>
  );
};

export default Shop;
