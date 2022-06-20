import { indexPageFetch } from './index/data';
import Hero from './index/hero';

export const getStaticProps = async () => {
  const { heading, image } = await indexPageFetch();
  return {
    props: {
      heading,
      image
    }
  };
};

const Home = ({ heading, image }) => {
  return <Hero heading={heading} image={image} />;
};

export default Home;
