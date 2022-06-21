import { albumPageFetch, albumPathsFetch } from './data';

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
  console.log(pageData);
  return <></>;
};

export default MediaAlbum;
