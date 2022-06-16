import { albumPageFetch, albumPathsFetch } from './data';
import Header from './header';
import Photos from './photos';

export default function MediaAlbum({ pageData }) {
  return (
    <div>
      <Header
        title={pageData.title}
        seo={pageData.seo}
        cover={pageData.cover}
        artist={pageData.artist}
        venue={pageData.venue.name}
        date={pageData.date}
      />
      <Photos images={pageData.images} />
    </div>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: await albumPathsFetch(),
    fallback: false
  };
};

export const getStaticProps = async (context) => {
  return {
    props: {
      pageData: await albumPageFetch(context.params.slug)
    }
  };
};
