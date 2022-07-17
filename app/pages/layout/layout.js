import { useRouter } from 'next/router';
import Footer from './footer';
import Head from './head';
import Header from './header';

const Layout = ({ children, siteSettings }) => {
  const router = useRouter();
  const route = router.pathname;
  const page =
    route !== '/' && `${route.charAt(1).toUpperCase()}${route.slice(2)} | `;
  return (
    <div className="page">
      <Head page={page} {...siteSettings} />
      <Header logo={siteSettings.favicon} route={route} />
      <main>{children}</main>
      <Footer
        logo={siteSettings.favicon}
        socialMedia={siteSettings.socialMedia}
      />
    </div>
  );
};

export default Layout;
