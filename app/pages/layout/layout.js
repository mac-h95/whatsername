import { useRouter } from 'next/router';
import CartProvider from 'pages/shop/context';
import Footer from './footer';
import Head from './head';
import Header from './header';

const Layout = ({ children, siteSettings }) => {
  const router = useRouter();
  const route = router.pathname;
  const page =
    route !== '/' && `${route.charAt(1).toUpperCase()}${route.slice(2)} | `;
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen ">
        <Head page={page} {...siteSettings} />
        <Header logo={siteSettings.favicon} route={route} />
        <main className="flex-1 flex-grow justify-self-start">{children}</main>
        <Footer
          logo={siteSettings.favicon}
          socialMedia={siteSettings.socialMedia}
        />
      </div>
    </CartProvider>
  );
};

export default Layout;
