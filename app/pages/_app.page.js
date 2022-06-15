import '@fontsource/poppins';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/900.css';
import sanity from 'sanity';
import CartProvider from './shop/context';
import './utility/global.css';

const MyApp = ({ Component, pageProps, siteSettings }) => (
  <CartProvider>
    <Component {...pageProps} />
  </CartProvider>
);

export default MyApp;

MyApp.getInitialProps = async () => {
  const siteSettings = await sanity.getDocument('siteSettings');
  return { siteSettings };
};
