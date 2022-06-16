import sanity from 'sanity';
import Footer from '../../layout/footer';
import LayoutHeader from '../../layout/header';
import { albumPageFetch, albumPathsFetch } from './data';
import Header from './header';
import Photos from './photos';

export default function MediaAlbum({ pageData, siteSettings }) {
  return (
    <>
      <LayoutHeader {...siteSettings} />
      <Header {...pageData} />
      <Photos {...pageData} />
      <Footer {...siteSettings} />
    </>
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
      pageData: await albumPageFetch(context.params.slug),
      siteSettings: await sanity.getDocument('siteSettings')
    }
  };
};
