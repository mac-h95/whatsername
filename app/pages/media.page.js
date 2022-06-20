import Heading from 'heading';
import AlbumList from './media/albums';
import { mediaPageFetch } from './media/data';

export const getStaticProps = async () => {
  const { heading, albums } = await mediaPageFetch();
  return {
    props: {
      heading,
      albums
    }
  };
};

const Media = ({ heading, albums }) => {
  return (
    <>
      <Heading heading={heading} />
      <AlbumList albums={albums} />
    </>
  );
};

export default Media;
