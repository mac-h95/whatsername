import '@fontsource/poppins';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/900.css';
import Layout from 'layout';
import { useRouter } from 'next/router';
import sanity from 'sanity';
import CartProvider from './shop/context';
import './utility/global.css';

const MyApp = ({ Component, pageProps, siteSettings }) => {
  const router = useRouter();
  if (router.pathname === '/' || router.pathname === '/media/albums/[slug]')
    return (
      <CartProvider>
        <Component {...pageProps} />;
      </CartProvider>
    );

  return (
    <CartProvider>
      <Layout siteSettings={siteSettings}>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
};

export default MyApp;

MyApp.getInitialProps = async () => {
  const siteSettings = await sanity.getDocument('siteSettings');
  return { siteSettings };
};
