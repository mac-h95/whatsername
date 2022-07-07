import '@fontsource/poppins'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/900.css'
import Layout from 'layout'
import sanity from 'sanity'
import './utility/global.css'
import { CartProvider, useCart } from './shop/cart'
import { useContext } from 'react'

const MyApp = ({ Component, pageProps, siteSettings }) => (
  <Layout siteSettings={siteSettings}>
    <Component {...pageProps} />
  </Layout>
)

export default MyApp

MyApp.getInitialProps = async () => {
  const siteSettings = await sanity.getDocument('siteSettings')
  return { siteSettings }
}
