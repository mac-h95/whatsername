import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import sanity, { urlFor } from 'sanity';
import Footer from './layout/footer';
import Head from './layout/head';
import Header from './layout/header';

export const getStaticProps = async () => {
  return {
    props: {
      pageData: await sanity.getDocument('homePage'),
      siteSettings: await sanity.getDocument('siteSettings')
    }
  };
};

const Home = ({ pageData, siteSettings }) => {
  const router = useRouter();
  const route = router.pathname;
  const page =
    route !== '/' && `${route.charAt(1).toUpperCase()}${route.slice(2)} | `;
  return (
    <>
      <Head page={page} {...siteSettings} />
      <Header logo={siteSettings.favicon} route={route} />
      <main className="min-h-[90vh] z-10">
        <div className="z-10 flex flex-col justify-start space-y-8 pb-52">
          <h1>{pageData.heading}</h1>
          <Link href="/about">
            <button className="mx-auto primary hero">Find Out More</button>
          </Link>
        </div>
        <Image
          src={urlFor(pageData.image)}
          alt={pageData.heading}
          layout="fill"
          objectFit="cover"
          style={{ opacity: 0.2, zIndex: 0, position: 'relative' }}
        />
      </main>
      <Footer
        logo={siteSettings.favicon}
        socialMedia={siteSettings.socialMedia}
      />
    </>
  );
};

export default Home;
