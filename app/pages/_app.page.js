import '@fontsource/poppins';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/900.css';
import Layout from 'layout';
import sanity from 'sanity';
import './utility/global.css';
import { CartProvider } from './shop/cart';

const MyApp = ({ Component, pageProps, siteSettings }) => (
  <CartProvider>
    <Layout siteSettings={siteSettings}>
      <Component {...pageProps} />
    </Layout>
  </CartProvider>
);

export default MyApp;

MyApp.getInitialProps = async () => {
  const siteSettings = await sanity.getDocument('siteSettings');
  return { siteSettings };
};
