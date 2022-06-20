import { albumPageFetch, albumPathsFetch } from './data';
import Hero from './hero';
import PhotoList from './list';

export const getStaticPaths = async () => {
  return {
    paths: await albumPathsFetch(),
    fallback: false
  };
};

export const getStaticProps = async (context) => {
  return {
    props: {
      pageData: await albumPageFetch(context.params.photos)
    }
  };
};

const MediaAlbum = ({ pageData }) => {
  return (
    <>
      <Hero {...pageData} />
      <PhotoList {...pageData} />
    </>
  );
};

export default MediaAlbum;
