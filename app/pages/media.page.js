import Heading from 'heading';
import AlbumList from './media/albums';
import { mediaPageFetch } from './media/data';

export const getStaticProps = async () => {
  return {
    props: {
      pageData: await mediaPageFetch()
    }
  };
};

const Media = ({ pageData }) => {
  return (
    <>
      <Heading heading={pageData.heading} />
      <AlbumList albums={pageData.albums} />
    </>
  );
};

export default Media;
